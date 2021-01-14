// Reference - Week-13: CatsApp
// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const updateDevoured = document.querySelectorAll('.devour-it');
    console.log(updateDevoured);
    // Set up the event listener for the create button
    if (updateDevoured) {
        updateDevoured.forEach((button) => {
            button.addEventListener('click', (e) => {
                // Grabs the id of the non-devoured burger
                const id = e.target.getAttribute('data-id');
                const newDevouredState = {
                    devoured: true,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newDevouredState),
                }).then((response) => {
                    // Check that the response is all good
                    if (response.ok) {
                        console.log(`changed devoured to: true`);
                        location.reload('/index');
                    } else {
                        alert('something went wrong!');
                    }
                });
            });
        });
    }
});