Feature: Validate the Search functionality of webdriverIO Site

  Background:
      Given I open the website

  @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

  When I login as user
      And I change username
      And I logout as user

  @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

  When I login as user
      And I add new article as user
      And I logout as user

 @Scenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

  When I login as user
      And I change user name
      And I logout as user

      