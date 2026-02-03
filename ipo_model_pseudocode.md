# IPO Model and Pseudocode for Burger Ordering App

## IPO MODEL (Input-Process-Output)

### INPUT:
- firstName (text input)
- lastName (text input)
- gender (radio button: Female, Male, Non-Binary)
- burgerType (radio button: Beef, Turkey, Veggie)
- toppings (checkboxes: Secret Sauce, Bacon, Avocado, Cheese, Greens, and more)

### PROCESS:
1. Capture form data when user clicks "Place Order"
2. Validate all required fields are filled
3. Loop through topping checkboxes to count selections
4. Calculate base price based on burger type
5. Calculate topping cost (number of toppings × price per topping)
6. Calculate total cost (base price + topping cost)
7. Determine greeting type based on user selection
8. Generate personalized greeting message
9. Update window title with dimensions
10. Modify reload link text and URL
11. Apply styling to link

### OUTPUT:
- Greeting message displaying:
  * Personalized greeting based on user's name and chosen greeting type
  * Total number of toppings selected
  * Final cost of the order
- Updated window title
- Styled refresh link

---

## PSEUDOCODE

```
FUNCTION placeOrder()
  // Get form inputs using getElementById
  SET firstName = value from firstName input field
  SET lastName = value from lastName input field
  SET gender = value from selected gender radio button
  SET burgerType = value from selected burger type radio button
  
  // Count toppings using loop
  SET toppingCount = 0
  SET toppingCheckboxes = all checkboxes with name "toppings"
  
  FOR EACH checkbox IN toppingCheckboxes DO
    IF checkbox is checked THEN
      INCREMENT toppingCount by 1
    END IF
  END FOR
  
  // Calculate costs
  IF burgerType = "Beef" THEN
    SET basePrice = 8.99
  ELSE IF burgerType = "Turkey" THEN
    SET basePrice = 7.99
  ELSE IF burgerType = "Veggie" THEN
    SET basePrice = 6.99
  END IF
  
  SET toppingPrice = 0.50
  SET toppingCost = toppingCount × toppingPrice
  SET totalCost = basePrice + toppingCost
  
  // Determine greeting (2 different types)
  SET greetingType = randomly select 1 or 2
  
  IF greetingType = 1 THEN
    SET greeting = "Dear " + firstName + " " + lastName + ", thank you for your order!"
  ELSE
    SET greeting = "Hey " + firstName + "! Your burger is on the way!"
  END IF
  
  // Display message
  SET message = greeting + " You selected " + toppingCount + " toppings. Your total is $" + totalCost.toFixed(2)
  
  DISPLAY message in alert or on page
  
  // Set window title to dimensions
  SET windowWidth = window inner width
  SET windowHeight = window inner height
  SET document.title = "Your window is " + windowWidth + " x " + windowHeight
  
  // Update reload link
  SET reloadLink = get element by ID "reloadLink"
  SET reloadLink.href = current page URL from document object
  SET reloadLink.textContent = "Refresh"
  ADD class "greenLink" to reloadLink using classList
  
END FUNCTION

// Call function when Place Order button is clicked
```

---

## DOM ELEMENT SELECTION METHODS (2 different methods required):

1. **document.getElementById()** - Used for firstName, lastName, reloadLink
2. **document.getElementsByName()** - Used for gender, burgerType, toppings checkboxes
3. **Alternative: document.getElementsByTagName()** - Could be used for input elements
4. **Alternative: document.querySelector()** - Could be used for any element

---

## BROWSER & DOCUMENT OBJECT MODEL USAGE:

### Window Object:
- `window.innerWidth` - Get current window width
- `window.innerHeight` - Get current window height

### Document Object:
- `document.title` - Set the page title
- `document.URL` - Get current page URL for the refresh link
- `document.getElementById()` - Access specific elements
- `document.getElementsByName()` - Access form elements by name

---

## IMPLEMENTATION NOTES:

1. Use HTML form elements (input, radio, checkbox)
2. Use a loop to count selected toppings
3. Include at least 5 topping options
4. Implement 2 different greeting types
5. Set window title dynamically using JavaScript
6. Modify reload link href and text
7. Apply CSS class to link using JavaScript
8. Include comments in all files
9. Name folder: 340 L4 yourUsername
10. Zip and upload: HTML, CSS, and JavaScript files
