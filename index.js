const button = $('button');

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
            fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
            console.log(data)
        });
        }
    });
   
});
