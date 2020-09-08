const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open the website$/, () => {
    home.openHomePage();
});

When(/^I sign up a new user$/, () => {
    home.signUp();
});

When(/^I login with valid credentials$/, () => {
    home.login();
});

When(/^I logout$/, () => {
    home.logout();
});

When(/^I search a hotel$/, () => {
    home.searchHotel();
});

When(/^I book a room$/, () => {
    home.bookRoom();
});

When(/^I add a tour to wishlist$/, () => {
    home.addTourToWishlist();
});

When(/^I remove a tour from wishlist$/, () => {
    home.removeFromWishlist();
});

When(/^I change address in my profile$/, () => {
    home.changeAddress();
});

When(/^I create a user account$/, () => {
    home.createUserAccount();
    home.logout();
});

When(/^I choose pay on arrival method$/, () => {
    home.payOnArrival();
});
