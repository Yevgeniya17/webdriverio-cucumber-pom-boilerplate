const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config();
var faker = require('faker');

class sampleHomePage extends NativePage {



  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

openHomePage() {
  browser.url("http://qatutorials.net:3000/");
}

loginAdmin() {
  $(this.homePageElement.loginLink).click();
  browser.pause(3000);
  $(this.homePageElement.loginEmailTextbox).setValue(process.env.testing_email_admin);
  $(this.homePageElement.loginPasswordTextbox).setValue(process.env.testing_password_admin);
  $(this.homePageElement.loginButton).click();
  // $(this.homePageElement.homePageLink).waitForDisplayed();
  browser.pause(6000);
  }

signUp() {
  let randomUsername = faker.internet.userName();
      console.log('New username: ' + randomUsername);

  let randomNewPassword = faker.internet.password();
      console.log('New password ' + randomNewPassword);

  let randomEmail = faker.internet.email();
  console.log('User email ' + randomEmail);


   $(this.homePageElement.signUpLink).click();
   browser.pause(3000);
   $(this.homePageElement.signUpUsernameTextbox).setValue(randomUsername);
   $(this.homePageElement.signUpEmailTextbox).setValue(randomEmail);
   $(this.homePageElement.signUpPasswordTextbox).setValue(randomNewPassword);
   $(this.homePageElement.signUpConfirmPasswordTextbox).setValue(randomNewPassword);
   $(this.homePageElement.registerButton).click();
   browser.pause(3000);
  }

  logOutHomePage() {
    $(this.homePageElement.myDashboardLink).waitForDisplayed();
    $(this.homePageElement.myDashboardLink).click();
    $(this.homePageElement.logOutHomePage).waitForExist();
    $(this.homePageElement.logOutHomePage).click();
    $(this.homePageElement.loginLink).waitForExist();
  }

  logOutAdminPage() {
    // $(this.homePageElement.sidePanelToggle).click();
    browser.pause(4000);
    $(this.homePageElement.logOutLink).scrollIntoView();
    browser.pause(4000);
    $(this.homePageElement.logOutLink).waitForClickable();
    $(this.homePageElement.logOutLink).click();
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

  verifyNewUser() {
  //  $(this.homePageElement.sidePanelToggle).click();
   browser.pause(3000);
   $(this.homePageElement.usersDropdown).waitForClickable();
   $(this.homePageElement.usersDropdown).click();
   browser.pause(3000);
   $(this.homePageElement.allUsersLink).click();
   browser.pause(3000);
   $(this.homePageElement.newUserCheckbox).click();
   $(this.homePageElement.bulkActionsDropdown).click();
   $(this.homePageElement.confirmNewUser).waitForDisplayed();
   $(this.homePageElement.confirmNewUser).click();
   $(this.homePageElement.applyButton).click();
   browser.pause(5000);
   $(this.homePageElement.successMessage).waitForDisplayed();
  }

  loginUser() {
    browser.pause(5000);
    $(this.homePageElement.loginLink).waitForClickable();
    $(this.homePageElement.loginLink).click();
    browser.pause(5000);
    $(this.homePageElement.loginEmailTextbox).setValue(process.env.testing_email_user);
    $(this.homePageElement.loginPasswordTextbox).setValue(process.env.testing_password_user);
    $(this.homePageElement.loginButton).click();
    // $(this.homePageElement.homePageLink).waitForDisplayed();
    browser.pause(5000);
    }

    logOutUserPage() {
      // $(this.homePageElement.sidePanelToggle).click();
      // browser.pause(8000);
      browser.setTimeout({ 'implicit': 8000 });
      $(this.homePageElement.logOutLink).click();
  
    }

    addNewArticleUser() {
      let frame = $('//*[@id="body_ifr"]');
    
      $(this.homePageElement.addPostUser).waitForDisplayed();
      $(this.homePageElement.addPostUser).click();
      $(this.homePageElement.addArticleUser).waitForDisplayed();
      $(this.homePageElement.addArticleUser).click();
      browser.pause(5000);
      $(this.homePageElement.postTitleTextbox).waitForExist({ timeout: 5000 });
      $(this.homePageElement.postTitleTextbox).setValue('Test');
      $(this.homePageElement.postSlugTextbox).setValue('Test');
      $(this.homePageElement.postSummaryTextbox).setValue('Test');
      $(this.homePageElement.postKeywordsTextbox).setValue('Test');
      $(this.homePageElement.postCategoryDropdown).click();
      $(this.homePageElement.postTestingCategory).waitForDisplayed();
      $(this.homePageElement.postTestingCategory).click();
      $(this.homePageElement.postSubcategoryDropdown).click();
      $(this.homePageElement.postAutomationSubcategory).waitForDisplayed();
      $(this.homePageElement.postAutomationSubcategory).click();
      browser.pause(5000);
      browser.switchToFrame('body_ifr');
      $(this.homePageElement.contentTextarea).setValue('Test,Test,Test');
      browser.switchToParentFrame();
      $(this.homePageElement.postContentBoldButton).click();
      $(this.homePageElement.postTextColor).click();
      $(this.homePageElement.postTextColorGreen).waitForDisplayed();
      $(this.homePageElement.postTextColorGreen).click();
      $(this.homePageElement.postContentAlignCenterButton).click();
      $(this.homePageElement.publishButton).click();
    }

    changeUserFirstLastName() {
      let randomFirstName = faker.fake("{{name.firstName}}");
      console.log('User first name: ' + randomFirstName); 

      let randomLastName = faker.fake("{{name.lastName}}");
      console.log('User last name: ' + randomLastName); 

      $(this.homePageElement.myProfileUserLink).waitForDisplayed();
      $(this.homePageElement.myProfileUserLink).click();
      browser.pause(5000);
      $(this.homePageElement.firstNameUserTextbox).waitForExist();
      $(this.homePageElement.firstNameUserTextbox).setValue(randomFirstName);
      $(this.homePageElement.lastNameUserTextbox).setValue(randomLastName);
      $(this.homePageElement.saveUserInfromationButton).click();
      browser.pause(5000);
      $(this.homePageElement.successMessage).waitForExist();
      browser.pause(5000);
    
    }

    changePasswordUser() {
    //to do find way to update/store password
      let randomNewPassword = faker.internet.password();
      console.log('New password ' + randomNewPassword);

      $(this.homePageElement.myProfileUserLink).waitForDisplayed();
      $(this.homePageElement.myProfileUserLink).click();
      browser.pause(2000);
      $(this.homePageElement.currentPasswordUserTextbox).waitForDisplayed();
      $(this.homePageElement.currentPasswordUserTextbox).setValue(process.env.testing_password_user);
      $(this.homePageElement.newPasswordUserTextbox).setValue(randomNewPassword);
      $(this.homePageElement.savePasswordUserButton).click();
      $(this.homePageElement.successMessage).waitForDisplayed();

      process.env.testing_password_user = randomNewPassword;
    }

    changeUsername() {
      let randomUsername = faker.internet.userName();
      console.log('New username: ' + randomUsername);

      $(this.homePageElement.myProfileUserLink).waitForDisplayed();
      $(this.homePageElement.myProfileUserLink).click();
      browser.pause(3000);
      $(this.homePageElement.usernameTextbox).waitForExist();
      $(this.homePageElement.usernameTextbox).setValue(randomUsername);
      $(this.homePageElement.saveUserInfromationButton).click();
      browser.pause(2000);
      $(this.homePageElement.successMessage).waitForExist();
    }

    singUpAndChangePassword() {
  let randomUsername = faker.internet.userName();
    console.log('New username: ' + randomUsername);

  let randomPassword = faker.internet.password();
    console.log('Password ' + randomPassword);

  let randomEmail = faker.internet.email();
    console.log('User email ' + randomEmail);


  $(this.homePageElement.signUpLink).click();
  browser.pause(3000);
  $(this.homePageElement.signUpUsernameTextbox).setValue(randomUsername);
  $(this.homePageElement.signUpEmailTextbox).setValue(randomEmail);
  $(this.homePageElement.signUpPasswordTextbox).setValue(randomPassword);
  $(this.homePageElement.signUpConfirmPasswordTextbox).setValue(randomPassword);
  $(this.homePageElement.registerButton).click();
  browser.pause(3000);

  $(this.homePageElement.loginLink).click();
  browser.pause(3000);
  $(this.homePageElement.loginEmailTextbox).setValue(process.env.testing_email_admin);
  $(this.homePageElement.loginPasswordTextbox).setValue(process.env.testing_password_admin);
  $(this.homePageElement.loginButton).click();
  browser.pause(3000);

  var isSideBarDisplayed = $(this.homePageElement.logOutLink).isDisplayed();
  if (isSideBarDisplayed == false) {
    $(this.homePageElement.sidePanelToggle).click();
    browser.pause(5000);
  }
  else {
    console.log("Side Bar Is Already Displayed");
  }
  
  $(this.homePageElement.usersDropdown).waitForExist({ timeout: 5000 });
  $(this.homePageElement.usersDropdown).click();
  $(this.homePageElement.allUsersLink).waitForClickable({ timeout: 5000 });
  $(this.homePageElement.allUsersLink).click();
  browser.pause(3000);
  $(this.homePageElement.newUserCheckbox).click();
  $(this.homePageElement.bulkActionsDropdown).click();
  $(this.homePageElement.confirmNewUser).waitForDisplayed();
  $(this.homePageElement.confirmNewUser).click();
  $(this.homePageElement.applyButton).click();
  $(this.homePageElement.successMessage).waitForDisplayed();

  var isSideBarDisplayed2 = $(this.homePageElement.logOutLink).isDisplayed()
  if (isSideBarDisplayed2 == false) {
    $(this.homePageElement.sidePanelToggle).click();
    browser.pause(5000);
  }
  else {
    console.log("Side Bar Is Already Displayed");
  }
  
  
  $(this.homePageElement.logOutLink).click();

  browser.pause(3000);
  $(this.homePageElement.loginLink).waitForClickable();
  $(this.homePageElement.loginLink).click();
  browser.pause(3000);
  $(this.homePageElement.loginEmailTextbox).setValue(randomEmail);
  $(this.homePageElement.loginPasswordTextbox).setValue(randomPassword);
  $(this.homePageElement.loginButton).click();
  // $(this.homePageElement.homePageLink).waitForDisplayed();
  browser.pause(3000);

  var isSideBarDisplayed3 = $(this.homePageElement.logOutLink).isDisplayed()
  if (isSideBarDisplayed3 == false) {
    $(this.homePageElement.sidePanelToggle).click();
    browser.pause(5000);
  }
  else {
    console.log("Side Bar Is Already Displayed");
  }
  

  let randomNewPassword = faker.internet.password();
      console.log('New password ' + randomNewPassword);

 
  
  // $(this.homePageElement.sidePanelToggle).click();
  $(this.homePageElement.myProfileUserLink).waitForDisplayed();
  $(this.homePageElement.myProfileUserLink).click();
  browser.pause(2000);
  $(this.homePageElement.currentPasswordUserTextbox).waitForDisplayed();
  $(this.homePageElement.currentPasswordUserTextbox).setValue(randomPassword);
  $(this.homePageElement.newPasswordUserTextbox).setValue(randomNewPassword);
  $(this.homePageElement.savePasswordUserButton).click();
  $(this.homePageElement.successMessage).waitForDisplayed();
  }


  createNewPage() {
    var randomName = faker.lorem.word();

    // $(this.homePageElement.sidePanelToggle).click();
    $(this.homePageElement.pagesDropdown).waitForClickable();
    $(this.homePageElement.pagesDropdown).click();
    $(this.homePageElement.addNewPagesLink).waitForClickable();
    $(this.homePageElement.addNewPagesLink).click();
    $(this.homePageElement.pageNameTextbox).waitForDisplayed();
    $(this.homePageElement.pageNameTextbox).setValue(randomName);
    browser.pause(5000);
    browser.switchToFrame('content_ifr');
    $(this.homePageElement.contentTextarea).setValue('Test');
    browser.switchToParentFrame();
    $(this.homePageElement.publishCheckbox).click();
    $(this.homePageElement.publishPageButton).click();   
  }
    

  sidePanelIsDisplayed() {
    var isSideBarDisplayed = $(this.homePageElement.logOutLink).isDisplayed();
    if (isSideBarDisplayed == false) {
      $(this.homePageElement.sidePanelToggle).click();
      browser.pause(5000);
    }
    else {
      console.log("Side Bar Is Already Displayed");
    }

  }
}

module.exports = sampleHomePage;
