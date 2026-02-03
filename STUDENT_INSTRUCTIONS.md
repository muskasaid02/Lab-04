# Student Instructions for Lab Assignment 04

## Overview
This project requires you to create a burger ordering app for "Old Henry's Big Burger City." You've been provided with template files that have detailed TODO comments to guide you through the assignment.

## Files Provided
1. **student_index.html** - HTML template with TODO comments
2. **student_styles.css** - CSS template with TODO comments  
3. **student_script.js** - JavaScript template with TODO comments

## Before You Start Coding

### 1. Create Your Project Folder
- Name it: `340 L4 [YourUsername]` (replace [YourUsername] with your actual username)
- Put all three files in this folder

### 2. Rename the Files
Remove "student_" from the filenames:
- `student_index.html` → `index.html`
- `student_styles.css` → `styles.css`
- `student_script.js` → `script.js`

### 3. Required Deliverables (Upload to Canvas BEFORE coding)
You need to upload these FIRST:
- **Flowchart** - Visual diagram showing the app's process flow
- **IPO Model & Pseudocode** - Document showing Input-Process-Output and pseudocode

## Step-by-Step Coding Guide

### Phase 1: HTML Structure (index.html)
Work through the HTML file in order:
1. Link your CSS file in the `<head>`
2. Add the page heading (h1)
3. Add the reload/refresh link with proper ID
4. Create the form with all required fields:
   - First Name input
   - Last Name input
   - Gender radio buttons (3 options)
   - Burger Type radio buttons (3 options)
   - Toppings checkboxes (minimum 5, you can add more!)
5. Add the Place Order button
6. Create the message display div
7. Link your JavaScript file at the bottom

**Testing**: Open index.html in your browser. You should see the form structure.

### Phase 2: CSS Styling (styles.css)
Style your page to match the assignment screenshot:
1. Reset default styles
2. Style the body and container
3. Style headings (h1, h2)
4. **IMPORTANT**: Create the `.greenLink` styles exactly as specified
5. Style the order form
6. Style form inputs, radio buttons, and checkboxes
7. Style the Place Order button
8. Style the order message area
9. Add responsive design for mobile

**Testing**: Refresh your browser. Your page should look professional and match the color scheme.

### Phase 3: JavaScript Functionality (script.js)

#### Part 1: Page Initialization
1. Add the DOMContentLoaded event listener
2. Call initialization functions

**Testing**: Add a console.log to make sure this runs when page loads.

#### Part 2: placeOrder() Function
This is the main function. Build it step by step:
1. Get firstName and lastName values
2. Loop through gender radio buttons to find selection
3. Loop through burger type radio buttons  
4. Validate all fields are filled
5. **REQUIRED**: Loop through topping checkboxes and count selections
6. Calculate cost
7. Generate greeting
8. Display message

**Testing**: Click the button and use console.log() to check each value.

#### Part 3: calculateCost() Function
1. Use if/else to set base price based on burger type
2. Calculate topping cost (count × $0.50)
3. Calculate total
4. Return object with all costs

**Testing**: console.log() the returned object to verify calculations.

#### Part 4: generateGreeting() Function
**CRITICAL**: You must implement 2 DIFFERENT greeting types!
1. Use Math.random() to pick type 1 or 2
2. Create a formal greeting (Type 1)
3. Create a casual greeting (Type 2)
4. Return the greeting

**Testing**: Call the function multiple times to see both greeting types.

#### Part 5: displayOrderMessage() Function
1. Get the message div
2. Create HTML with greeting, topping count, and total cost
3. Set innerHTML
4. Add 'show' class to make it visible

**Testing**: Place an order and verify the message displays correctly.

#### Part 6: setWindowTitle() Function
**REQUIRED**: Uses Browser & Document Object Models
1. Get window.innerWidth and window.innerHeight
2. Set document.title to "Your window is [width] x [height]"

**Testing**: Check the browser tab title. Resize window and check again.

#### Part 7: setupReloadLink() Function
**REQUIRED**: Multiple tasks here!
1. Get the element by ID
2. Set href to document.URL
3. Change textContent from "Reload" to "Refresh"
4. Add 'greenLink' class

**Testing**: Check that the link says "Refresh" and has green styling.

## Assignment Requirements Checklist

Make sure you have:
- [ ] Created flowchart (upload to Canvas before coding)
- [ ] Created IPO model and pseudocode (upload to Canvas before coding)
- [ ] Minimum of 5 topping options
- [ ] Used HTML form elements
- [ ] Used a loop to count toppings
- [ ] Implemented 2 different greeting types
- [ ] Set window title to dimensions
- [ ] Used Browser & Document Object Models
- [ ] Used 2 different methods to select HTML elements:
  - [ ] document.getElementById()
  - [ ] document.getElementsByName()
- [ ] Updated reload link with document.URL
- [ ] Changed "Reload" to "Refresh" using JS
- [ ] Applied greenLink class styling
- [ ] Added comments to all files
- [ ] Tested that everything works

## Final Steps

1. **Test thoroughly**: 
   - Fill out the form and place an order
   - Try different combinations
   - Check that costs calculate correctly
   - Verify both greeting types appear (refresh and try multiple times)
   - Resize window and check title updates

2. **Validate your code**:
   - Check for syntax errors
   - Make sure all required elements have proper IDs and names
   - Verify CSS classes are applied correctly

3. **Prepare for submission**:
   - Make sure folder is named: `340 L4 [YourUsername]`
   - Zip the folder containing: index.html, styles.css, script.js
   - Upload to Canvas

## Tips for Success

- **Read all TODO comments carefully** before writing code
- **Work in small steps** and test frequently
- **Use console.log()** to debug and verify your code works
- **Don't skip the planning phase** (flowchart and IPO model)
- **Ask for help** if you get stuck on a specific TODO
- **Make sure you understand** what each piece of code does

## Common Mistakes to Avoid

❌ Forgetting to use a loop to count toppings (required!)
❌ Only implementing 1 greeting type (need 2!)
❌ Not updating the reload link properly
❌ Forgetting to add the greenLink class
❌ Missing required ID attributes
❌ Not testing the code before submitting

## Need Help?

If you get stuck:
1. Re-read the TODO comment for that section
2. Check the assignment requirements in Canvas
3. Review the relevant textbook pages (especially 580-588 for forms)
4. Ask your instructor during office hours

Good luck! Take it step by step and you'll do great! 🍔
