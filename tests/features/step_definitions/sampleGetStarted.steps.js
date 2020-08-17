const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open "([^"]*)" the website$/, (url) => {
    home.openHomePage(url);
});

When(/^I search for "([^"]*)" this keyword$/, (keyword) => {
    home.search(keyword);
});

When(/^I open cart page$/, () => {
    home.openCart();
});

When(/^I add item to cart$/, () => {
    home.addItemToCart();
});

When(/^I send a message$/, () => {
    home.sentMessageContactForm();
});

Given(/^I login with valid credentials$/, () => {
    home.login();
});

When(/^I navigate to home page$/, () => {
    home.navigateToHome();
});

When(/^I add item to wishlist$/, () => {
    home.login();
    home.addItemToWishlist();
});

When(/^I check my wishlist$/, () => {
    home.login();
    home.checkMyWishlistItem();
});

When(/^I send my wishlist$/, () => {
    home.login();
    home.sendMyWishlist();
});

When(/^I register an account$/, () => {
    home.register();
});

Given(/^I make an order$/, () => {
    home.login();
    home.addItemToCart();
    home.makeAnOrder();
});

Given(/^I make a reorder$/, () => {
    home.login();
    home.reorder();
    home.makeAnOrder();
});

When(/^I add a message$/, () => {
    home.login();
    home.addItemToCart();
    home.makeAnOrder();
    home.addAMessage();
});

When(/^I set item quantity to 2$/, () => {
    home.login();
    home.addItemToCart();
    home.changeItemQuantity();
});

When(/^I log out$/, () => {
    home.signOut();
});