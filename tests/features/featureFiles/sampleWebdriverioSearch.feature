Feature: Validate the Search functionality of webdriverIO Site

  Background:
      Given I open "http://automationpractice.com/index.php" the website

  @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I login with valid credentials
      And I log out

   @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I register an account
      And I log out

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I search for "dress" this keyword

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I open cart page

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I add item to cart


    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I send a message
     


    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I add item to wishlist
      And I log out


    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I check my wishlist
      And I log out

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I send my wishlist
      And I log out

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I make an order
      And I log out


    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I make a reorder
      And I log out

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I add a message
      And I log out

    @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    When I navigate to home page
      And I set item quantity to 2
      And I log out