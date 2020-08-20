const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config()

class sampleHomePage extends NativePage {



  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

openHomePage() {
  browser.url("http://qatutorials.net:3000/");
}

login() {
  $(this.homePageElement.loginLink).click();
  $(this.homePageElement.loginEmailTextbox).setValue('y.ten93@gmail.com');
  $(this.homePageElement.loginPasswordTextbox).setValue('qwerty');
  $(this.homePageElement.loginButton).click();
  $(this.homePageElement.homePageLink).waitForDisplayed();
  }

signUp() {
  function generateRandomEmail() {
    let randomEmail = Math.random().toString(36).substring(7);
    return randomEmail + "@gmail.com"
 }
   let randomEmail = generateRandomEmail();

   function generateRandomUsername() {
    let randomUsername = Math.random().toString(36).substring(7);
    return randomUsername
 }
   let randomUsername = generateRandomUsername();

   $(this.homePageElement.signUpLink).click();
   $(this.homePageElement.signUpUsernameTextbox).setValue(randomUsername);
   $(this.homePageElement.signUpEmailTextbox).setValue(randomEmail);
   $(this.homePageElement.signUpPasswordTextbox).setValue('qwerty');
   $(this.homePageElement.signUpConfirmPasswordTextbox).setValue('qwerty');
   $(this.homePageElement.registerButton).click();

   console.log('Username for generated user: ' + randomUsername);
   console.log('Email for generated user: ' + randomEmail);
  }

  logOutHomePage() {
    $(this.homePageElement.myDashboardLink).waitForExist();
    $(this.homePageElement.myDashboardLink).click();
    $(this.homePageElement.logOutHomePage).waitForExist();
    $(this.homePageElement.logOutHomePage).click();
    $(this.homePageElement.loginLink).waitForExist();
  }

  logOutProfilePage() {
    $(this.homePageElement.logOutLink).waitForExist();
    $(this.homePageElement.logOutLink).click();
    $(this.homePageElement.loginLink).waitForExist();
  }

  switchToHomePage() {
    $(this.homePageElement.homePageLink).waitForExist();
    $(this.homePageElement.homePageLink).click();
    $(this.homePageElement.myDashboardLink).waitForDisplayed();
  }

  switchToUserPage() {
    $(this.homePageElement.myDashboardLink).waitForExist();
    $(this.homePageElement.myDashboardLink).click();
    $(this.homePageElement.homePageLink).waitForDisplayed();
  }
}

module.exports = sampleHomePage;
