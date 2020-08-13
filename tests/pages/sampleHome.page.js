const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config()

class sampleHomePage extends NativePage {

  

  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

  openHomePage(url) {
    browser.url(url);
    $(this.homePageElement.printedDressItemLink).waitForDisplayed();
  }

  search(keyword) {
    $(this.homePageElement.searchTextbox).setValue(keyword);
    $(this.homePageElement.searchButton).click();
    $(this.homePageElement.sortByDropdown).waitForExist();
    browser.pause(5000);
  }

  openCart() {
    $(this.homePageElement.cartLink).click();
    $(this.homePageElement.shoppingCardHeader).waitForDisplayed();
  }

  addItemToCart() {
    $(this.homePageElement.printedDressItemLink).click();
    $(this.homePageElement.addToCartButton).waitForDisplayed();
    $(this.homePageElement.addToCartButton).click();
    $(this.homePageElement.closeWindowAddToCart).waitForDisplayed();
    $(this.homePageElement.closeWindowAddToCart).click();
    browser.pause(3000);
    $(this.homePageElement.homePageLink).click();
  }

  sentMessageContactForm() {
    $(this.homePageElement.contactUsLink).click();
    $(this.homePageElement.subjectHeadingDropdown).waitForExist();
    $(this.homePageElement.subjectHeadingDropdown).selectByIndex(1);
    $(this.homePageElement.emailTextbox).setValue('test@gmail.com');
    $(this.homePageElement.orderReferenceTextbox).setValue('232');
    $(this.homePageElement.messageTextbox).setValue('Wrong items');
    $(this.homePageElement.sendButton).click();
    $(this.homePageElement.messageSendSuccess).waitForDisplayed();
    
  }

  login() {
    $(this.homePageElement.singInLink).click();
    $(this.homePageElement.emailLoginTextbox).waitForDisplayed();
    $(this.homePageElement.emailLoginTextbox).setValue(process.env.testing_email);
    $(this.homePageElement.passwordTextbox).setValue(process.env.testing_password);
    $(this.homePageElement.signInButton).click();
    $(this.homePageElement.orderHistoryButton).waitForDisplayed();
    $(this.homePageElement.homePageLink).click();
  }

  navigateToHome() {
    $(this.homePageElement.homePageLink).waitForDisplayed();
    $(this.homePageElement.homePageLink).click();
  }

  addItemToWishlist() {
    $(this.homePageElement.printedDressItemLink).click();
    $(this.homePageElement.addToWishlistButton).waitForDisplayed();
    $(this.homePageElement.addToWishlistButton).click();
    $(this.homePageElement.closeWindowAddToWishlist).waitForDisplayed();
    $(this.homePageElement.closeWindowAddToWishlist).click();
  }

  checkMyWishlistItem() {
    $(this.homePageElement.viewMyAccountLink).click();
    $(this.homePageElement.myWishlistButton).waitForClickable();
    $(this.homePageElement.myWishlistButton).click();
    $(this.homePageElement.viewMyWishlistLink).click();
    $(this.homePageElement.myWishlistDetailsWindow).waitForDisplayed();
    $(this.homePageElement.closeMyWishlistDetailsButton).click();
  }

  sendMyWishlist() {
    $(this.homePageElement.viewMyAccountLink).click();
    $(this.homePageElement.myWishlistButton).waitForClickable();
    $(this.homePageElement.myWishlistButton).click();
    $(this.homePageElement.viewMyWishlistLink).click();
    $(this.homePageElement.myWishlistDetailsWindow).waitForDisplayed();
    $(this.homePageElement.sendMyWishlistLink).click();
    browser.pause(1000);
    $(this.homePageElement.sendMyWishlistLink).click();
    $(this.homePageElement.sendEmailTextbox).setValue('a123@gmail.com');
    $(this.homePageElement.sendMyWishlistButton).click();
    browser.pause(5000);

  }

  register() {
  function generateString() {
   let randomString = Math.random().toString(36).substring(7);
   return randomString + "@gmail.com"
}
  let randomString = generateString();

  $(this.homePageElement.singInLink).click();
  $(this.homePageElement.emailCreateTextbox).setValue(randomString);
  $(this.homePageElement.createAnAccountButton).click();
  $(this.homePageElement.titleMrsRadioButton).click();
  $(this.homePageElement.firstNameTextbox).setValue('Asd');
  $(this.homePageElement.lastNameTextbox).setValue('Qwe');
  $(this.homePageElement.emailRegisterTextbox).click();
  $(this.homePageElement.passwordCreateTextbox).setValue('Qwerty12');
  $(this.homePageElement.dayOfBirthDropdown).selectByIndex(10);
  $(this.homePageElement.monthOfBirthDropdown).selectByIndex(9);
  $(this.homePageElement.yearOfBirthDropdown).selectByIndex(29);
  $(this.homePageElement.singUpForNewsletterCheckbox).click();
  $(this.homePageElement.receiveSpecialOffersCheckbox).click();
  $(this.homePageElement.addressTextbox).setValue('111 asd');
  $(this.homePageElement.cityTextbox).setValue('Qwerty');
  $(this.homePageElement.stateDropdown).selectByIndex(10);
  $(this.homePageElement.zipCodeTextbox).setValue('12345');
  $(this.homePageElement.mobilePhoneTextbox).setValue(12345678901);
  $(this.homePageElement.addressAliasTextbox).setValue('Home address');
  $(this.homePageElement.registerAnAccountButton).click();
  $(this.homePageElement.orderHistoryButton).waitForDisplayed();
  $(this.homePageElement.homePageLink).click();
  browser.pause(3000);

  console.log('Email for generated user: ' + randomString);
  }


  makeAnOrder() {
    $(this.homePageElement.cartLink).click();
    $(this.homePageElement.proceedToCheckoutOnCartPageLink).waitForDisplayed();
    $(this.homePageElement.proceedToCheckoutOnCartPageLink).click();
    $(this.homePageElement.confirmAddressButton).waitForDisplayed();
    $(this.homePageElement.confirmAddressButton).click();
    $(this.homePageElement.agreeToTheTermsCheckbox).waitForExist();
    $(this.homePageElement.agreeToTheTermsCheckbox).click();
    $(this.homePageElement.confirmShippingButton).waitForDisplayed();
    $(this.homePageElement.confirmShippingButton).click();
    $(this.homePageElement.payByCheckLink).waitForDisplayed();
    $(this.homePageElement.payByCheckLink).click();
    $(this.homePageElement.confirmMyOrderButton).waitForDisplayed();
    $(this.homePageElement.confirmMyOrderButton).click();
    $(this.homePageElement.ConfirmationText).waitForDisplayed();
    $(this.homePageElement.homePageLink).click();

  }

  reorder() {
    $(this.homePageElement.viewMyAccountLink).click();
    $(this.homePageElement.orderHistoryButton).waitForDisplayed();
    $(this.homePageElement.orderHistoryButton).click();
    $(this.homePageElement.orderReferenceLink).waitForDisplayed();
    $(this.homePageElement.orderReferenceLink).click();
    $(this.homePageElement.reorderLink).waitForDisplayed();
    $(this.homePageElement.reorderLink).click();

  }

  addAMessage() {
    $(this.homePageElement.viewMyAccountLink).click();
    $(this.homePageElement.orderHistoryButton).waitForDisplayed();
    $(this.homePageElement.orderHistoryButton).click();
    $(this.homePageElement.orderReferenceLink).waitForDisplayed();
    $(this.homePageElement.orderReferenceLink).click();
    $(this.homePageElement.addAMessageProductDropdown).selectByIndex(0);
    $(this.homePageElement.addAMessageTexarea).setValue('Wrong Item');
    $(this.homePageElement.addAMessageSendButton).click();
    $(this.homePageElement.ConfirmationText).waitForDisplayed();
    $(this.homePageElement.homePageLink).click();

  }

  changeItemQuantity() {
    $(this.homePageElement.cartLink).click();
    $(this.homePageElement.shoppingCardHeader).waitForDisplayed();
    $(this.homePageElement.increaseQuantityLink).click();
    $(this.homePageElement.homePageLink).click();

  }
}

module.exports = sampleHomePage;
