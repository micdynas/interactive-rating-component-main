const buttons = document.querySelectorAll(".numbers");
const submit = document.querySelector(".submit");

buttons.forEach((button) => {
    button.addEventListener("click", function() {

        // Loop through all buttons EXCEPT the one currently clicked, and turn them off
        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove("active");
            }
        });

        // Toggle the active class on the clicked button
        // (Turns ON if it was off, turns OFF if it was already on)
        button.classList.toggle("active");

        // 3. Enable submit button only if a button is currently active
        const anySelected = document.querySelector(".numbers.active");
        submit.disabled = !anySelected;
        
        

   });

   // When submit button is clicked, show the second card and hide the first card
   submit.addEventListener("click", function() {
     const mainContainer = document.querySelector(".main-container");
     const secContainer = document.querySelector(".sec-container");
     mainContainer.classList.add("active");
     secContainer.classList.add("active");


// selected number

// Get the text from the active number button (e.g., "4")
const selectedNumber = document.querySelector(".numbers.active").textContent;
// Update the text content of the element with class "but-2" to show the selected number
const displaySelected = document.querySelector(".but-2");
// Set the text to "You selected X out of 5", where X is the selected number
displaySelected.textContent = `You selected ${selectedNumber} out of 5`;



   });


    });

    