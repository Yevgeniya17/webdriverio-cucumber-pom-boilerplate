Feature: Validate the Search functionality of webdriverIO Site

  Background:
      Given I open the website

#   @Scenario1
#   Scenario: As a user, I should create an account and login with valid credentials 

#   When I create a user account 
#     And I login with valid credentials
#     And I logout

  @Scenario2
  Scenario: As a user, I should search a hotel

  When I login with valid credentials
    And I search a hotel
    And I logout

  @Scenario3
  Scenario: As a user, I should book a room

  When I login with valid credentials
    And I search a hotel
    And I book a room
    And I logout


  @Scenario4
  Scenario: As a user, I should add a tour to wishlist and then remove it

  When I login with valid credentials
    And I add a tour to wishlist
    And I remove a tour from wishlist
    And I logout

  @Scenario5
  Scenario: As a user, I should change first and last name 

  When I login with valid credentials
    And I change address in my profile
    And I logout


  @Scenario6
  Scenario: As a user, I should choose pay at arrival as a payment method

  When I login with valid credentials
    And I choose pay on arrival method
    And I logout
 

  