const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open the website$/, () => {
    home.openHomePage();
    browser.pause(3000);
});

When(/^I sign up a new user$/, () => {
    home.signUp();
    browser.pause(3000);
});

When(/^I login with valid credentials$/, () => {
    home.login();
    browser.pause(3000);
});

When(/^I logout$/, () => {
    home.logout();
    browser.pause(3000);
});

When(/^I search a hotel$/, () => {
    home.searchHotel();
    browser.pause(3000);
});

When(/^I book a room$/, () => {
    home.bookRoom();
    browser.pause(3000);
});

When(/^I add a tour to wishlist$/, () => {
    home.addTourToWishlist();
});

When(/^I remove a tour from wishlist$/, () => {
    home.removeFromWishlist();
    browser.pause(3000);
});

When(/^I change address in my profile$/, () => {
    home.changeAddress();
    browser.pause(3000);
});

When(/^I create a user account$/, () => {
    home.createUserAccount();
    home.logout();
    browser.pause(3000);
});

When(/^I choose pay on arrival method$/, () => {
    home.payOnArrival();
    browser.pause(3000);
});
