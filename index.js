
const button = $('button');

function hoursFormat(hours) {
    if (hours === 1) {
        return "hr"
    } else {
        return "hrs"
    }
}

function previousFormat(previous) {
    if (previous === 'daily') {
        return "Yesterday - "
    } else if (previous === 'weekly') {
        return "Last week - "
    } else {
        return "Last month - "
    }
}

/* Trigger a function when a button is clicked */
button.click(function(event) { 

    /* Saves the button id through the event in a variable */
    var clickedBtn = event.target.id;

    /* Uses the id (button name) as a mean to access the HTML id element and
    add the class that shows when the button is selected. */
    $(`#${clickedBtn}`).addClass('selectedBtn');

    /* Passes through each button and removes 'selectedBtn' class if its id is
    different than clicked button id*/
    button.each(function() {
        if (this.id !== clickedBtn) {
            $(`#${this.id}`).removeClass('selectedBtn');
        } else {
            /* Fetches the data from json file */
            fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                data.forEach(element => {

                    var hoursDataCurrent = element.timeframes[clickedBtn].current
                    var hoursDataPrevious = element.timeframes[clickedBtn].previous

                    switch(element.title) {
                        case "Work": 
                            $('#work h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent)); 
                            $('#work p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataCurrent)); 
                            break;
                        case "Play": 
                            $('#play h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent));
                            $('#play p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious));
                            break;
                        case "Study": 
                            $('#study h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent));
                            $('#study p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious));
                            break;
                        case "Exercise": 
                            $('#exercise h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent));
                            $('#exercise p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious));
                            break;
                        case "Social": 
                            $('#social h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent));
                            $('#social p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious));
                            break;
                        default: 
                            $('#selfCare h1').text(hoursDataCurrent + hoursFormat(hoursDataCurrent));
                            $('#selfCare p').text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious));
                    }
                });
            });
        }
    });
});
