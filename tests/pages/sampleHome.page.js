const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config();
var faker = require('faker');

class sampleHomePage extends NativePage {



  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

openHomePage() {
  browser.url("https://www.phptravels.net/");
  browser.pause(5000);
}

signUp() {
  let randomFirstName = faker.fake("{{name.firstName}}");
      console.log('User first name: ' + randomFirstName); 

  let randomLastName = faker.fake("{{name.lastName}}");
      console.log('User last name: ' + randomLastName); 

  let randomNewPassword = faker.internet.password();
      console.log('New password: ' + randomNewPassword);

  let randomEmail = faker.internet.email();
  console.log('User email: ' + randomEmail);

  let randomPhone = faker.phone.phoneNumber();
  console.log('User phone: ' + randomPhone);

  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.signUpLink).waitForClickable();
  $(this.homePageElement.signUpLink).click();
  $(this.homePageElement.signUpFirstNameTextbox).waitForDisplayed();
  $(this.homePageElement.signUpFirstNameTextbox).setValue(randomFirstName);
  $(this.homePageElement.signUpLastNameTextbox).setValue(randomLastName);
  $(this.homePageElement.signUpPhoneTextbox).setValue(randomPhone);
  $(this.homePageElement.signUpEmailTextbox).setValue(randomEmail);
  $(this.homePageElement.signUpPasswordTextbox).setValue(randomNewPassword);
  $(this.homePageElement.signUpConfirmPasswordTextbox).setValue(randomNewPassword);
  $(this.homePageElement.signUpButton).click();
  $(this.homePageElement.bookingsLink).waitForDisplayed();
  $(this.homePageElement.homePageLink).click();
  $(this.homePageElement.homePageBackground).waitForExist();
  }

  createUserAccount() {
    $(this.homePageElement.myAccountDropdown).waitForDisplayed();
    $(this.homePageElement.myAccountDropdown).click();
    $(this.homePageElement.signUpLink).waitForClickable();
    $(this.homePageElement.signUpLink).click();
    $(this.homePageElement.signUpFirstNameTextbox).waitForDisplayed();
    $(this.homePageElement.signUpFirstNameTextbox).setValue('J');
    $(this.homePageElement.signUpLastNameTextbox).setValue('T');
    $(this.homePageElement.signUpPhoneTextbox).setValue('1112223344');
    $(this.homePageElement.signUpEmailTextbox).setValue('y.ten93@gmail.com');
    $(this.homePageElement.signUpPasswordTextbox).setValue('Qwerty');
    $(this.homePageElement.signUpConfirmPasswordTextbox).setValue('Qwerty');
    $(this.homePageElement.signUpButton).click();
    $(this.homePageElement.bookingsLink).waitForDisplayed();
    $(this.homePageElement.homePageLink).click();
    $(this.homePageElement.homePageBackground).waitForExist();
  }

login() {
  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.loginLink).waitForClickable();
  $(this.homePageElement.loginLink).click();
  $(this.homePageElement.loginEmailTextbox).waitForDisplayed();
  $(this.homePageElement.loginEmailTextbox).setValue(process.env.user_email);
  $(this.homePageElement.loginPasswordTextbox).setValue(process.env.user_password);
  browser.pause(5000);
  $(this.homePageElement.loginButton).click();
  $(this.homePageElement.bookingsLink).waitForDisplayed();
  $(this.homePageElement.homePageLink).click();
  $(this.homePageElement.homePageBackground).waitForExist();
  }

logout() {
  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.logOutLink).click();
  $(this.homePageElement.loginButton).waitForDisplayed();
  }

searchHotel() {
  $(this.homePageElement.hotelsLink).waitForDisplayed();
  $(this.homePageElement.hotelsLink).click();
  browser.pause(5000);
  $(this.homePageElement.destinationTextbox).click();
  $(this.homePageElement.destinationTextbox).setValue('a');
  $(this.homePageElement.firstDestinationFromDropdown).waitForExist();
  $(this.homePageElement.firstDestinationFromDropdown).click();
  $(this.homePageElement.adultsIncreaseButton).click();
  $(this.homePageElement.searchButton).click();
  $(this.homePageElement.modifySearchButton).waitForDisplayed();
}

bookRoom() {
  $(this.homePageElement.hotelDetailsButton).click();
  $(this.homePageElement.selectRoomCheckbox).waitForClickable();
  $(this.homePageElement.selectRoomCheckbox).click();
  $(this.homePageElement.bookNowButton).waitForClickable();
  $(this.homePageElement.bookNowButton).click();
  $(this.homePageElement.confirmBookingButton).waitForClickable();
  $(this.homePageElement.confirmBookingButton).click();
  browser.pause(8000);
  $(this.homePageElement.messageText).waitForExist();
  }

addTourToWishlist() {
  $(this.homePageElement.toursLink).waitForDisplayed();
  $(this.homePageElement.toursLink).click();
  $(this.homePageElement.tourTypeDropdown).waitForDisplayed();
  $(this.homePageElement.tourDestinationTextbox).click();
  $(this.homePageElement.firstDestinationFromDropdown).waitForDisplayed();
  $(this.homePageElement.firstDestinationFromDropdown).click();
  $(this.homePageElement.tourTypeDropdown).click();
  $(this.homePageElement.firstTypeFromDropdown).waitForDisplayed();
  $(this.homePageElement.firstTypeFromDropdown).click();
  $(this.homePageElement.tourSearchButton).click();
  $(this.homePageElement.addtoWishlistButton).waitForDisplayed();
  $(this.homePageElement.addtoWishlistButton).click();
  browser.acceptAlert();
  $(this.homePageElement.removeFromWishlistButton).waitForDisplayed();
  }

removeFromWishlist() {
  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.accountLink).waitForDisplayed();
  $(this.homePageElement.accountLink).click();
  $(this.homePageElement.wishlistLink).waitForDisplayed();
  $(this.homePageElement.wishlistLink).click();
  $(this.homePageElement.removeFromWishlistOnAccountPageButton).waitForDisplayed();
  $(this.homePageElement.removeFromWishlistOnAccountPageButton).click();
  browser.acceptAlert();
}

changeAddress() {
  let randomStreetAddress = faker.address.streetAddress();
  let randomCity = faker.address.city();
  let randomState = faker.address.state();
  let randomZipCode = faker.address.zipCode();

  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.accountLink).click();
  $(this.homePageElement.myProfileLink).waitForDisplayed();
  $(this.homePageElement.myProfileLink).click();
  $(this.homePageElement.addressTextbox).waitForDisplayed();
  $(this.homePageElement.addressTextbox).setValue(randomStreetAddress);
  $(this.homePageElement.cityTextbox).setValue(randomCity);
  $(this.homePageElement.stateTextbox).setValue(randomState);
  $(this.homePageElement.zipCodeTextbox).setValue(randomZipCode);
  browser.pause(8000);
  $(this.homePageElement.countryDropdown).waitForClickable();
  $(this.homePageElement.countryDropdown).click();
  browser.pause(5000);
  $(this.homePageElement.countryTextbox).waitForDisplayed();
  $(this.homePageElement.countryTextbox).setValue('United States');
  browser.pause(5000);
  $(this.homePageElement.unitedStatesOption).click();
  $(this.homePageElement.submitProfileUpdateButton).click();
  browser.pause(2000);
}

payOnArrival() {
  $(this.homePageElement.myAccountDropdown).waitForDisplayed();
  $(this.homePageElement.myAccountDropdown).click();
  $(this.homePageElement.accountLink).waitForDisplayed();
  $(this.homePageElement.accountLink).click();
  $(this.homePageElement.invoiceLink).waitForDisplayed();
  $(this.homePageElement.invoiceLink).click();
  browser.switchWindow('Invoice');
  browser.pause(8000);
  $(this.homePageElement.payOnArrivalButton).click();
  browser.acceptAlert();
  $(this.homePageElement.reservationMessage).waitForDisplayed();


}




}

module.exports = sampleHomePage;
