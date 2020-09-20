const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open the website$/, () => {
    home.openHomePage();
});

When(/^I login as admin$/, () => {
    home.loginAdmin();
});

When(/^I create an account$/, () => {
    home.signUp();
    home.loginAdmin();
    home.sidePanelIsDisplayed();
    home.verifyNewUser();
    home.sidePanelIsDisplayed();
    home.logOutAdminPage();
});

When(/^I logout on home page$/, () => {
    home.logOutHomePage();
});

When(/^I logout as admin$/, () => {
    home.sidePanelIsDisplayed();
    home.logOutAdminPage();
});

When(/^I switch to home page$/, () => {
    home.switchToHomePage();
});

When(/^I switch to user page$/, () => {
    home.switchToUserPage();
});

When(/^I verify new user$/, () => {
    home.sidePanelIsDisplayed();
    home.verifyNewUser();
});

When(/^I login as user$/, () => {
    home.loginUser();
});

When(/^I logout as user$/, () => {
    home.sidePanelIsDisplayed();
    home.logOutUserPage();
});

When(/^I add new article as user$/, () => {
    home.sidePanelIsDisplayed();
    home.addNewArticleUser();
});

When(/^I change user first and last name$/, () => {
    home.sidePanelIsDisplayed();
    home.changeUserFirstLastName();
});


When(/^I change user password$/, () => {
    home.sidePanelIsDisplayed();
    home.changePasswordUser();
});

When(/^I change username$/, () => {
    home.sidePanelIsDisplayed();
    home.changeUsername();
});

When(/^I create an account and change password$/, () => {
    home.singUpAndChangePassword();
});


When(/^I create a new page$/, () => {
    home.sidePanelIsDisplayed();
    home.createNewPage();
    home.sidePanelIsDisplayed();
    home.logOutAdminPage();
});

