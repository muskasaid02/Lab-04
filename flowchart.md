# Burger Ordering App Flowchart

```
START
  |
  v
Display Order Form
  - First Name input
  - Last Name input
  - Gender radio buttons
  - Burger Type radio buttons
  - Toppings checkboxes (min 5)
  |
  v
User fills out form
  |
  v
User clicks "PLACE ORDER" button
  |
  v
Validate form inputs
  |
  v
Count selected toppings using loop
  |
  v
Calculate total cost
  - Base price for burger type
  - Add cost per topping
  |
  v
Determine greeting type based on user choice
  - Option 1: Formal greeting
  - Option 2: Casual greeting
  |
  v
Display greeting message with:
  - Personalized greeting
  - Total number of toppings
  - Final cost
  |
  v
Set window title to dimensions
  |
  v
Update "Reload" link text to "Refresh"
  |
  v
Apply greenLink class styling
  |
  v
END
```

## Key Decision Points:
1. **Gender Selection**: Female, Male, or Non-Binary
2. **Burger Type**: Beef, Turkey, or Veggie (affects base price)
3. **Toppings**: At least 5 options (affects final price)
4. **Greeting Type**: 2 different greeting styles
