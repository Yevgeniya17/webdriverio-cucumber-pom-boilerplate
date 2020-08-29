class homeLocators {
  constructor() {
    this.loginLink = '#loginLink';
    this.loginEmailTextbox = '#email';
    this.loginPasswordTextbox = '#password';
    this.loginButton = '#loginButton';
    this.forgotPasswordLink = 'a[href="/forgot-password"]';
    this.signUpLink = '#signupLink';
    this.signUpUsernameTextbox = 'input[name="username"]';
    this.signUpEmailTextbox = 'input[name="email"]';
    this.signUpPasswordTextbox = '#password';
    this.signUpConfirmPasswordTextbox = '#cPassword';
    this.registerButton = '#registerButton';
    this.homePageLink = '#viewSiteButton';
    this.contactsLink = 'div.menu-primary>ul>li>a[href="/pages/контакты"]';
    this.aboutUsLink = 'div.menu-primary>ul>li>a[href="/pages/о-нас"]';
    this.ourPartnersLink = 'div.menu-primary>ul>li>a[href="/pages/наши-партнеры"]';
    this.testingSchoolLink = 'div.menu-primary>ul>li>a[href="https://qualityassurance.ru/"]';
    this.breakingNewsLink = 'h5>a[href="/post/qa"]';
    this.mostViewedPost = 'h2>a[href="/post/qa"]';

    this.myAccountWindow = 'span.user';
    this.viewSiteButton = '//button[text()="View Site"]';
    this.dashboardLink = '#dashboard';
    this.postsDropdown = '#posts';
    this.allPostsLink = '#allPosts';
    this.addNewArticleLink = '//a/span[text()="Add New Article"]';
    this.categoriesDropdown = '#categories';
    this.categoriesLink = '//*[@id="side-header-menu"]/ul/li/ul/li/a/span[text()="Categories"]';
    this.subcategoriesLink = '//span[text()="Subcategories"]';
    this.newsletterLink = '//span[text()="Newsletter"]';
    this.subscribersLink = '//span[text()="Subscribers"]';
    this.sendEmailToSubscribersLink = '//span[text()="Send Email to Subscribers"]';
    this.mediaDropdown = '//span[text()="Media"]';
    this.libraryLink = '//span[text()="Library"]';
    this.addNewMediaLink = '//a[contains(@href,"media")]/span[text()="Add New"]';
    this.pagesDropdown = '//span[text()="Pages"]';
    this.allPagesLink = '//span[text()="All Pages"]';
    this.addNewPagesLink = '//a[contains(@href,"pages")]/span[text()="Add New"]';
    this.commentsLink = '//span[text()="Comments"]';
    this.contactsLink = '//span[text()="Contacts"]';
    this.menuLink = '//span[text()="Menu"]';
    this.adSpacesLink = '//span[text()="Ad Spaces"]';
    this.usersDropdown = '//span[text()="Users"]';
    this.administratorsLink = '//span[text()="Administrators"]';
    this.allUsersLink = '//span[text()="All Users"]';
    this.addNewUsersLink = '//a[contains(@href,"users")]/span[text()="Add New"]';
    this.myProfileAdminLink = '#myProfileLink';
    this.SocialLoginConfigurationLink = '//span[text()="Social Login Configuration"]';
    this.preferencesLink = '//span[text()="Preferences"]';
    this.visualSettingsLink = '//span[text()="Visual Settings"]';
    this.settingsDropdown = '//span[text()="Settings"]';
    this.generalSettingsLink = '//span[text()="General Settings"]';
    this.emailSettingsLink = '//span[text()="Email Settings"]';
    this.mediaSettingsLink = '//span[text()="Media Settings"]'
    this.logOutAdminLink = '#logoutLink';
    this.postLink = '//p[text()="Post"]';
    this.commentLink = '//p[text()="Comment"]';
    this.inactivePostLink = '//p[text()="Inactive Post"]';
    this.usersLink = '//p[text()="Users"]';
    this.viewAllCommentsButton = '//a[contains(@href,"comments")]/button[text()="View All"]';
    this.viewAllContactMessagesButton = '//a[contains(@href,"contacts")]/button[text()="View All"]';
    this.viewAllUsersButton = '//a[contains(@href,"users")]/button[text()="View All"]';
    this.viewAllSubscribersButton = '//a[contains(@href,"newsletter")]/button[text()="View All"]';
    this.searchButton = '#toggleSearch';
    this.searchTextbox = '#searchInput';
    this.myDashboardLink = '//a[text()="Dashboard"]';

    this.pendingPostsLink = '#pendingPosts';
    this.followersLink = '#followers';
    this.followingLink = '#following';
    this.bookmarksLink = '#bookmarks';

    this.logOutHomePageLink = '#logoutLinklogoutLink';

    this.newUserCheckbox = '(//input[@name="ids"])[1]';
    this.bulkActionsDropdown = 'div[class="nice-select form-control form-control-sm bulk"]';
    this.confirmNewUser = '//li[text()="Confirm User Email"]';
    this.applyButton = '#applyChanges';
    this.successMessage = '#successMessage';

    this.logOutUserLink = '#logout';
    this.myProfileUserLink = '#myProfile';
    this.addPostUser = '#addPostLink';
    this.addArticleUser = '#addPost';
    this.postTitleTextbox = '#title';
    this.postSlugTextbox = '#slug';
    this.postSummaryTextbox = '#summary';
    this.postKeywordsTextbox = '#keywords';
    this.postCategoryDropdown = '//span[text()="-- Please Select a Category --"]';
    this.postTestingCategory = '//li[text()="testing"]';
    this.postSubcategoryDropdown = '//span[text()="-- Select a Sub-Category --"]';
    this.postAutomationSubcategory = '(//li[text()="automation"])[2]';
    this.postContentTexarea = '#tinymce';
    this.postParagraphDropdown = 'button[title="Blocks"]';
    this.paragraphHeading1 = '//h1[text()="Heading 1"]';
    this.paragraphHeading2 = '//h2[text()="Heading 2"]';
    this.paragraphHeading3 = '//h3[text()="Heading 3"]';
    this.paragraphHeading4 = '//h4[text()="Heading 4"]';
    this.paragraphHeading5 = '//h5[text()="Heading 5"]';
    this.paragraphHeading6 = '//h5[text()="Heading 6"]';
    this.paragraphPreformatted = '//pre[text()="Preformatted"]';
    this.postContentBoldButton = '(//span[contains(@class,"tox-icon tox-tbtn__icon-wrap")])[1]';
    this.postContentItalicButton = '(//span[contains(@class,"tox-icon tox-tbtn__icon-wrap")])[2]';
    this.postTextColor = '(//span[@role="presentation"])[2]';
    this.postTextColorGreen = 'div[title="Green"]';
    this.postTextColorBlack = 'div[title="Black"]';
    this.postTextBackgroundColor = '(//span[@role="presentation"])[4]';
    this.postTextBackgroundColorYellow = 'div[title="Yellow"]';
    this.postContentAlignLeftButton = '(//span[contains(@class,"tox-icon tox-tbtn__icon-wrap")])[10]';
    this.postContentAlignCenterButton = '(//span[contains(@class,"tox-icon tox-tbtn__icon-wrap")])[11]';
    this.postContentAlignRightButton = '(//span[contains(@class,"tox-icon tox-tbtn__icon-wrap")])[12]';
    this.publishButton = '#publishButton';

    this.currentPasswordUserTextbox = 'input[name="currentPassword"]';
    this.newPasswordUserTextbox = 'input[name="password"]';
    this.savePasswordUserButton = '(//input[@value="Save Changes"])[2]';

    this.firstNameUserTextbox = 'input[name="firstName"]';
    this.lastNameUserTextbox = 'input[name="lastName"]';
    this.aboutMeUserTextArea = '#about';
    this.saveUserInfromationButton = '(//input[@value="Save Changes"])[1]';
    this.usernameTextbox = 'input[name="username"]';
   
















  










  }
}

module.exports = homeLocators;
