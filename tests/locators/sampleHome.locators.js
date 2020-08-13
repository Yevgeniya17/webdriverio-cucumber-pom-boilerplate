class homeLocators {
  constructor() {
    this.contactUsLink = 'a[title="Contact Us"]';
    this.singInLink = 'a[title="Log in to your customer account"]';
    this.searchTextbox = '#search_query_top';
    this.searchButton = 'button[name="submit_search"]';
    this.cartLink = 'a[title="View my shopping cart"]';
    this.womenLink = 'a[title="Women"]';
    this.dressesLink = '#block_top_menu > ul > li:nth-child(2) > a';
    this.printedDressItemLink = '//*[@id="homefeatured"]/li[3]/div/div[2]/h5/a';
    this.addToCartButton = 'button[name="Submit"]';
    this.closeWindowAddToCart = 'span[title="Close window"]';
    this.homePageLink = 'a[title="My Store"]'
    this.accoutCreateEmailTextbox = '#email_create';
    this.createAccountButton = '#SubmitCreate';
    this.emailLoginTextbox = '#email';
    this.passwordTextbox = '#passwd';
    this.forgotPasswordLink = 'a[title="Recover your forgotten password"]';
    this.signInButton = '#SubmitLogin > span'
    this.subjectHeadingDropdown = '#id_contact';
    this.emailTextbox = '#email';
    this.orderReferenceTextbox = '#id_order';
    this.messageTextbox = '#message';
    this.sendButton = '#submitMessage > span';
    this.sortByDropdown = 'select#selectProductSort';
    this.shoppingCardHeader = '//span[text()="Your shopping cart"]';
    this.messageSendSuccess = '.alert.alert-success';
    this.orderHistoryButton = '//span[text()="Order history and details"]';
    this.addToWishlistButton = '#wishlist_button';
    this.closeWindowAddToWishlist = 'a[title="Close"]';
    this.viewMyAccountLink ='a[title="View my customer account"]';
    this.myWishlistButton ='a[title="My wishlists"]';
    this.viewMyWishlistLink = '//a[contains(@onclick,"WishlistManage")]';
    this.myWishlistDetailsWindow = '#block-order-detail';
    this.closeMyWishlistDetailsButton = '#hideSendWishlist';
    this.sendMyWishlistButton = 'button[onclick="WishlistSend(\'wl_send\', \'23277\', \'email\');"]';
    this.sendMyWishlistLink = '#showSendWishlist';
    this.sendEmailTextbox = '#email1';
    this.emailCreateTextbox = '#email_create';
    this.createAnAccountButton ='#SubmitCreate';
    this.titleMrsRadioButton = '#id_gender2';
    this.firstNameTextbox = '#customer_firstname';
    this.lastNameTextbox = '#customer_lastname';
    this.emailRegisterTextbox = '#email';
    this.passwordCreateTextbox = '#passwd';
    this.dayOfBirthDropdown = '#days';
    this.monthOfBirthDropdown = '#months';
    this.yearOfBirthDropdown = '#years';
    this.singUpForNewsletterCheckbox = '#newsletter';
    this.receiveSpecialOffersCheckbox = '#optin';
    this.addressTextbox = '#address1';
    this.cityTextbox = '#city';
    this.stateDropdown = '#id_state';
    this.zipCodeTextbox = '#postcode';
    this.mobilePhoneTextbox = '#phone_mobile';
    this.addressAliasTextbox = '#alias';
    this.registerAnAccountButton = '#submitAccount';
    this.proceedToCheckoutLink = 'a[title="Proceed to checkout"]';
    this.proceedToCheckoutOnCartPageLink = 'p > a[title="Proceed to checkout"]';
    this.confirmAddressButton ='button[name="processAddress"]';
    this.agreeToTheTermsCheckbox = '#cgv';
    this.confirmShippingButton = 'button[name="processCarrier"]';
    this.payByCheckLink = 'a[title="Pay by check."]';
    this.confirmMyOrderButton = 'button.button.btn.btn-default.button-medium';
    this.ConfirmationText = 'p.alert.alert-success'
    this.orderReferenceLink = '(//a[contains(@href, \'javascript:showOrder\')])[1]';
    this.reorderLink = 'a[onclick="$(this).closest(\'form\').submit(); return false;"]';
    this.addAMessageProductDropdown = 'select[name="id_product"]';
    this.addAMessageTexarea = 'textarea[name="msgText"]';
    this.addAMessageSendButton = 'button[name="submitMessage"]';
    this.decreaseQuantityLink = 'a[title="Subtract"]';
    this.increaseQuantityLink  = 'a[title="Add"]'

  }
}

module.exports = homeLocators;
