Feature: Validate the Search functionality of webdriverIO Site

  Background:
      Given I open the website

  @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

  When I login with valid credentials
    And I logout on user page