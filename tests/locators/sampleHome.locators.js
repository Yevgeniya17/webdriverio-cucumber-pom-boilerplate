class homeLocators {
  constructor() {
    this.myAccountDropdown = 'div[class="dropdown dropdown-login dropdown-tab"]>#dropdownCurrency';
    this.signUpLink = 'a[class="dropdown-item tr"]';
    this.signUpFirstNameTextbox = 'input[name="firstname"]';
    this.signUpLastNameTextbox = 'input[name="lastname"]';
    this.signUpPhoneTextbox = 'input[name="phone"]';
    this.signUpEmailTextbox = 'input[name="email"]';
    this.signUpPasswordTextbox = 'input[name="password"]';
    this.signUpConfirmPasswordTextbox = 'input[name="confirmpassword"]';
    this.signUpButton = 'button[class="signupbtn btn_full btn btn-success btn-block btn-lg"]';
    this.loginLink = 'a[class="dropdown-item active tr"]';
    this.loginEmailTextbox = 'input[name="username"]';
    this.loginPasswordTextbox = 'input[type="password"]';
    this.loginButton = 'button[class="btn btn-primary btn-lg btn-block loginbtn"]'
    this.homePageLink = '//img[@alt="My Account"]';
    this.logOutLink = 'a[href="https://www.phptravels.net/account/logout/"]';
    this.homePageBackground = 'div[id="search"]';

    this.hotelsLink = 'a[href="#hotels"]';
    this.destinationTextbox = '(//input[@class="select2-input"])[8]';
    this.firstDestinationFromDropdown = '(//span[@class="select2-match"])[2]';
    this.checkInTextbox = 'input[id="checkin"]';
    this.checkOutTextbox = 'input[id="checkout"]';
    this.adultsDecreaseButton = '(//button[@class="btn btn-white bootstrap-touchspin-down "])[1]';
    this.adultsIncreaseButton = '(//button[@class="btn btn-white bootstrap-touchspin-up "])[1]';
    this.childDecreaseButton = '(//button[@class="btn btn-white bootstrap-touchspin-down "])[2]';
    this.childIncreaseButton = '(//button[@class="btn btn-white bootstrap-touchspin-up "])[2]';
    this.searchButton = '(//div[@class="col-lg-2 col-sm-12 col-xs-12"]/button[contains(text(),"Search")])[1]';
    this.modifySearchButton = '//button[text()="Modify Search"]';
    this.hotelDetailsButton = '(//a[@class="btn btn-primary btn-sm btn-wide"])[1]';
    this.selectRoomCheckbox = 'label[for="250"]';
    this.bookNowButton = 'button[class="book_button btn btn-success btn-block btn-lg chk"]';
    this.confirmBookingButton = 'button[name="logged"]';
    this.messageText = '//h4[text()="Your booking status is Unpaid"]';

    this.accountLink = 'a[href="https://www.phptravels.net/account"]';
    this.bookingsLink = 'a[href="#bookings"]';
    this.myProfileLink = 'a[href="#profile"]';
    this.addressTextbox = 'input[name="address1"]';
    this.cityTextbox = 'input[name="city"]';
    this.stateTextbox = 'input[name="state"]';
    this.zipCodeTextbox = 'input[name="zip"]';
    this.countryDropdown = 'a[class="chosen-single"]';
    this.unitedStatesOption = 'li[data-option-array-index="215"]';
    this.countryTextbox = 'input[class="chosen-search-input"]';
    this.submitProfileUpdateButton = 'button[class="btn btn-block updateprofile btn-primary"]';
    this.wishlistLink = 'a[href="#wishlist"]';

    this.toursLink = 'a[href="#tours"]';
    this.tourDestinationTextbox = '(//a[@class="select2-choice select2-default"])[2]';
    this.tourTypeDropdown = 'div[id="tourtype_chosen"]';
    this.firstTypeFromDropdown = 'li[data-option-array-index="1"]';
    this.tourSearchButton = '(//button[@class="btn btn-primary btn-block"])[4]';
    this.addtoWishlistButton = 'span[class="wishtext"]';
    this.removeFromWishlistButton = '//span[text()="Remove from wishlist"]';
    this.removeFromWishlistOnAccountPageButton = 'span[class="btn btn-sm btn-block btn-danger removewish remove_btn"]';

    this.invoiceLink = '(//a[@class="btn btn-primary btn-action btn-block"])[1]';
    this.payOnArrivalButton = 'button[class="btn btn-default arrivalpay"]';
    this.reservationMessage = '//h4[text()="Your booking status is Reserved"]';















  










  }
}

module.exports = homeLocators;
