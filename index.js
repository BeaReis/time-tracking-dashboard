const button = $('button');

/* This function sets hour String to plural or singular */
function hoursFormat(hours) {
    if (hours === 1) {
        return "hr"
    } else {
        return "hrs"
    }
}

/* This function formats the 'previous' spent hours String according to selected button */
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

                    /* These variables receives the current and previous time spent of the 'data.json' element. Their values are
                    redefined each time the element changes. */
                    var hoursDataCurrent = element.timeframes[clickedBtn].current
                    var hoursDataPrevious = element.timeframes[clickedBtn].previous

                    /* Since the 'forEach' loop will pass through each element in data.json, element.title can be used with template
                    string to set the data into current element without the need of a 'switch' or 'if else' conditional */
                    $(`#${element.title.toLowerCase()} h1`).text(hoursDataCurrent + hoursFormat(hoursDataCurrent)); 
                    $(`#${element.title.toLowerCase()} p`).text(previousFormat(clickedBtn) + hoursDataPrevious + hoursFormat(hoursDataPrevious)); 

                });
            });
        }
    });
});
