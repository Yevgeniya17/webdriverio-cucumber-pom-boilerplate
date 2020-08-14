Feature: Validate the Search functionality of webdriverIO Site

  @webdriverIOScenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    Given I opsen "http://automationpractice.com/index.php" the website
    When I sets item quantity to 2
    