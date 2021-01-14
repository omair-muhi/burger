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

    // CREATE
    const çreateNewBurger = document.getElementById('create-burger');

    if (çreateNewBurger) {
        çreateNewBurger.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get burger name and create JSON object
            const newBurger = {
                burger_name: document.getElementById('burger-name').value.trim(),
            };

            // Send POST request to create a new burger
            if (newBurger.burger_name !== '') {
                fetch('/api/burgers', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newBurger),
                }).then(() => {
                    // Empty the form
                    document.getElementById('burger-name').value = '';

                    // Reload the page so the user can see the new burger on LHS
                    console.log('Created a new burger!');
                    location.reload('/index');
                });
            }
        });
    }
});