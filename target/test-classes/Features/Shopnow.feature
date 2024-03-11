Feature: Validation of the Checkout page of Shopnow Web application

  Scenario Outline:Validation of Checkout page using Valid Credentials
  
    Given User launches Shopnow web application in "<browser>"
    Then User verifies that homepage is displayed
    When User searches for Laptop on the search bar
    And User clicks on the result
    When User views the product details of the product
    And User clicks add to cart
    Then User verifies if shopping cart page is open
    Then User vrifies the correct product
    And User clicks check out button
    Then User verifies if cart page is open
    And User clicks the login 
    Then User verifies if account page is open
    When User enters email and password and waits for a second
    And  User clicks Sign in button
    Then User verifies if we are back to Check out page
    Then User verifies if the account detail is correct
    When User enter hno , address, city, state , pincode and phone number
    And User closes browser
  
  Examples:
  
  |browser|
  |Chrome|
  |Firefox|