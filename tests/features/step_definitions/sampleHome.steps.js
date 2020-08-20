const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open the website$/, () => {
    home.openHomePage();
});

When(/^I login with valid credentials$/, () => {
    home.login();
});

When(/^I create an account$/, () => {
    home.signUp();
});

When(/^I logout on home page$/, () => {
    home.logOutHomePage();
});

When(/^I logout on user page$/, () => {
    home.logOutProfilePage();
});

When(/^I switch to home page$/, () => {
    home.switchToHomePage();
});

When(/^I switch to user page$/, () => {
    home.switchToUserPage();
});