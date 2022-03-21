@uiautomatedtests
Feature: Wishlist

  Background:
    #call the browser
    * call read('classpath:ui/driver.feature')
    # this creates a unique email id to avoid crash
    * def getUniqueID = function(){ return Math.random().toString(36).substr(2, 4)  + '' }
    * def randomId = getUniqueID()
    * string email = 'automated.tests.'+randomId+'@karatelabs.com'

  Scenario: Wishlist
    #create an account
    * driver.url = 'https://demo.opencart.com/index.php?route=account/register'
    * waitFor(registerPage.firstName).click()
    * input(registerPage.firstName, 'Peter')
    * input(registerPage.lastName, 'Thomas')
    * input(registerPage.email, email)
    * input(registerPage.telephone, '9887626251')
    * input(registerPage.password, 'P@s$W0rd!')
    * input(registerPage.confirmPassword, 'P@s$W0rd!')
    * click(registerPage.checkPrivacyPolicy)
    * click(registerPage.continueButton)
    * match text(registerPage.confirmationText) == 'Your Account Has Been Created!'
    * screenshot()

    #add two items to your account wish list
    * driver.url = 'https://demo.opencart.com/index.php?route=product/category&path=20'
    * waitFor(plp.firstProduct).click()
    * delay(3000)
    * click(plp.secondProduct)
    * delay(2000)

    #Validate that the two items you selected are displayed in the wish list.
    * click(header.wishList)
    * waitFor(wishListPage.firstItem)
    * match text(wishListPage.firstItem) == 'Canon EOS 5D'
    * match text(wishListPage.secondItem) == 'Apple Cinema 30"'
    * screenshot()

    #Remove the two items from the wishlist.
    * click(wishListPage.removeFirstItem)
    * delay(1500)
    * waitFor(wishListPage.removeFirstItem).click()
    * waitFor(wishListPage.emptyWishlistText)
    * match text(wishListPage.emptyWishlistText) == 'Your wish list is empty.'
    * screenshot()