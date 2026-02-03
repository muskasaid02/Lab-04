/**
 * Burger Ordering App - JavaScript
 * Front-end Web Development Lab Assignment 04
 * 
 * YOUR NAME HERE
 * DATE HERE
 */

// ============================================================================
// PART 1: PAGE INITIALIZATION
// ============================================================================

/* TODO: Add an event listener that waits for the DOM to be fully loaded
   Use: document.addEventListener('DOMContentLoaded', function() { ... })
   
   Inside this function, you need to:
   1. Call setWindowTitle() to set the initial window title
   2. Add a 'resize' event listener to the window that calls setWindowTitle()
   3. Call setupReloadLink() to configure the reload/refresh link
   4. Get the place order button using getElementById('placeOrderBtn')
   5. Add a 'click' event listener to the button that calls placeOrder()
*/




// ============================================================================
// PART 2: PLACE ORDER FUNCTION (Main Function)
// ============================================================================

/**
 * Main function to process the burger order
 * This function is called when user clicks "Place Order" button
 */
function placeOrder() {
    
    /* TODO STEP 1: Get the form input values
       
       Use document.getElementById() to get:
       - firstName (get the .value and use .trim() to remove spaces)
       - lastName (get the .value and use .trim() to remove spaces)
       
       Store these in variables like:
       const firstName = document.getElementById('firstName').value.trim();
    */
    
    
    
    /* TODO STEP 2: Get the selected gender using a loop
       
       HINT: This demonstrates Method 2 for selecting elements
       
       1. Use document.getElementsByName('gender') to get all gender radio buttons
       2. Create a variable to store the selected gender (let gender = '';)
       3. Use a for loop to go through each radio button:
          for (let i = 0; i < genderInputs.length; i++) {
              Check if the current radio button is checked (.checked property)
              If it is, save its value and break out of the loop
          }
    */
    
    
    
    /* TODO STEP 3: Get the selected burger type using a loop
       
       Same approach as gender above:
       1. Use document.getElementsByName('burgerType')
       2. Loop through to find which one is checked
       3. Store the value
    */
    
    
    
    /* TODO STEP 4: Validate that all required fields are filled
       
       Use an if statement to check:
       if (!firstName || !lastName || !gender || !burgerType) {
           Show an alert telling user to fill all fields
           Use return; to stop the function
       }
    */
    
    
    
    /* TODO STEP 5: Count the selected toppings using a loop (REQUIRED!)
       
       1. Use document.getElementsByName('toppings') to get all topping checkboxes
       2. Create a variable: let toppingCount = 0;
       3. Create a for loop that goes through each checkbox:
          for (let i = 0; i < toppingCheckboxes.length; i++) {
              If the checkbox is checked (.checked property), 
              increment toppingCount by 1
          }
       
       OPTIONAL: You can also create an array to store the names of selected toppings
    */
    
    
    
    /* TODO STEP 6: Calculate the total cost
       
       Call the calculateCost() function (you'll write this below)
       Pass in the burgerType and toppingCount
       Store the result in a variable:
       const costs = calculateCost(burgerType, toppingCount);
    */
    
    
    
    /* TODO STEP 7: Generate the greeting message
       
       Call the generateGreeting() function (you'll write this below)
       Pass in firstName, lastName, and gender
       Store the result:
       const greeting = generateGreeting(firstName, lastName, gender);
    */
    
    
    
    /* TODO STEP 8: Display the order confirmation
       
       Call the displayOrderMessage() function (you'll write this below)
       Pass in: greeting, toppingCount, and costs.total
    */
    
    
}


// ============================================================================
// PART 3: CALCULATE COST FUNCTION
// ============================================================================

/**
 * Calculate the cost based on burger type and number of toppings
 * @param {string} burgerType - Type of burger selected (Beef, Turkey, or Veggie)
 * @param {number} toppingCount - Number of toppings selected
 * @returns {object} Object with base, topping, and total costs
 */
function calculateCost(burgerType, toppingCount) {
    
    /* TODO STEP 1: Determine base price
       
       Create a variable: let basePrice = 0;
       
       Use if/else if statements to set the price based on burgerType:
       - If burgerType is 'Beef', set basePrice = 8.99
       - Else if burgerType is 'Turkey', set basePrice = 7.99
       - Else if burgerType is 'Veggie', set basePrice = 6.99
    */
    
    
    
    /* TODO STEP 2: Calculate topping cost
       
       Each topping costs $0.50
       Create variables:
       const toppingPrice = 0.50;
       const toppingCost = toppingCount * toppingPrice;
    */
    
    
    
    /* TODO STEP 3: Calculate total cost
       
       const totalCost = basePrice + toppingCost;
    */
    
    
    
    /* TODO STEP 4: Return an object with all the costs
       
       return {
           base: basePrice,
           topping: toppingCost,
           total: totalCost
       };
    */
    
    
}


// ============================================================================
// PART 4: GENERATE GREETING FUNCTION (2 DIFFERENT TYPES REQUIRED!)
// ============================================================================

/**
 * Generate personalized greeting based on customer info
 * IMPORTANT: Must implement 2 DIFFERENT greeting types as required by assignment
 * @param {string} firstName - Customer's first name
 * @param {string} lastName - Customer's last name
 * @param {string} gender - Customer's gender
 * @returns {string} Personalized greeting message
 */
function generateGreeting(firstName, lastName, gender) {
    
    /* TODO STEP 1: Randomly select a greeting type (1 or 2)
       
       Use Math.random() to randomly pick between two greeting types:
       const greetingType = Math.floor(Math.random() * 2) + 1;
       
       This will give you either 1 or 2
    */
    
    
    
    /* TODO STEP 2: Create the greeting based on the type
       
       Create a variable: let greeting = '';
       
       Use an if/else statement:
       
       if (greetingType === 1) {
           Create a FORMAL greeting (Type 1)
           Example: "Dear [firstName] [lastName], thank you for..."
           
       } else {
           Create a CASUAL greeting (Type 2)  
           Example: "Hey [firstName]! Thanks for ordering..."
       }
       
       Make these greetings different and personalized!
       You can use the gender variable if you want, or just use the name.
    */
    
    
    
    /* TODO STEP 3: Return the greeting
       
       return greeting;
    */
    
    
}


// ============================================================================
// PART 5: DISPLAY ORDER MESSAGE FUNCTION
// ============================================================================

/**
 * Display the order confirmation message on the page
 * @param {string} greeting - Personalized greeting
 * @param {number} toppingCount - Number of toppings selected
 * @param {number} totalCost - Total cost of the order
 */
function displayOrderMessage(greeting, toppingCount, totalCost) {
    
    /* TODO STEP 1: Get the message display area
       
       Use document.getElementById('orderMessage')
       Store it in a variable: const messageDiv = ...
    */
    
    
    
    /* TODO STEP 2: Create the message HTML content
       
       Use template literals (backticks) to create HTML:
       const message = `
           <h3>Order Confirmed!</h3>
           <p>${greeting}</p>
           <p><strong>Toppings Selected:</strong> ${toppingCount}</p>
           <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
           <p>Your order will be ready for pickup shortly!</p>
       `;
       
       Note: .toFixed(2) formats the number to 2 decimal places
    */
    
    
    
    /* TODO STEP 3: Display the message
       
       Set the innerHTML of messageDiv to the message:
       messageDiv.innerHTML = message;
       
       Add the 'show' class to make it visible:
       messageDiv.classList.add('show');
    */
    
    
    
    /* TODO STEP 4 (OPTIONAL): Scroll to the message
       
       messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    */
    
    
}


// ============================================================================
// PART 6: SET WINDOW TITLE FUNCTION (Browser & Document Object Models)
// ============================================================================

/**
 * Set the window title to show current dimensions
 * REQUIRED: Uses Browser & Document Object Models (Chapter 3)
 */
function setWindowTitle() {
    
    /* TODO STEP 1: Get window dimensions
       
       Use the window object to get inner width and height:
       const width = window.innerWidth;
       const height = window.innerHeight;
    */
    
    
    
    /* TODO STEP 2: Set the document title
       
       Use the document object to set the title:
       document.title = `Your window is ${width} x ${height}`;
       
       This creates a title like: "Your window is 960 x 715"
    */
    
    
}


// ============================================================================
// PART 7: SETUP RELOAD LINK FUNCTION (Required modifications)
// ============================================================================

/**
 * Setup the reload/refresh link
 * REQUIRED TASKS:
 * - Populate href with current page URL (use document.URL)
 * - Change text from "Reload" to "Refresh" using JavaScript
 * - Apply greenLink class for styling
 */
function setupReloadLink() {
    
    /* TODO STEP 1: Get the reload link element
       
       Use document.getElementById('reloadLink')
       Store it in: const reloadLink = ...
    */
    
    
    
    /* TODO STEP 2: Set the href to current page URL
       
       Use the document object to get the current URL:
       reloadLink.href = document.URL;
    */
    
    
    
    /* TODO STEP 3: Change the text from "Reload" to "Refresh"
       
       Use textContent to change the link text:
       reloadLink.textContent = 'Refresh';
    */
    
    
    
    /* TODO STEP 4: Add the greenLink class
       
       Use classList to add the class:
       reloadLink.classList.add('greenLink');
    */
    
    
}


// ============================================================================
// CHECKLIST - Make sure you've completed all requirements:
// ============================================================================

/*
 * ☐ Used a loop to count selected toppings
 * ☐ Implemented 2 DIFFERENT types of greetings
 * ☐ Set window title to dimensions using window object
 * ☐ Updated reload link href using document.URL
 * ☐ Changed "Reload" text to "Refresh" using JavaScript
 * ☐ Added greenLink class using classList
 * ☐ Used document.getElementById() for element selection (Method 1)
 * ☐ Used document.getElementsByName() for element selection (Method 2)
 * ☐ Added comments explaining your code
 * ☐ Tested that the order form works correctly
 * ☐ Verified the greeting shows topping count and total cost
 */
