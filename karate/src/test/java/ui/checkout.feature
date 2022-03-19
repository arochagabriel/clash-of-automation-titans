@uiautomatedtests
Feature: Checkout

  Background:
    #call the browser
    * call read('classpath:ui/driver.feature')

  Scenario: Checkout
    #Add two items of your choice to the cart.
    * driver.url = 'https://demo.opencart.com/'
    * waitFor(homePage.firstProduct).click()
    * delay(1500)
    * waitFor(homePage.secondProduct).click()

    #Proceed to checkout
    * click(homePage.checkout.button)
    * waitFor(homePage.checkout.link).click()
    * delay(1500)

    #validate that the total price is equal to the sum of the two items added to the cart.
    * def item1 = text(checkoutPage.firstItem)
    * def valueItem1 = parseFloat(item1.replace(/[$]/g,''))
    * def item2 = text(checkoutPage.secondItem)
    * def valueItem2 = parseFloat(item2.replace(/[$]/g,''))
    * def sum = text(checkoutPage.totalCart)
    * def totalCart = parseFloat(sum.replace(/[$]/g,''))
    * assert valueItem1 + valueItem2 == totalCart

    #update the quantity on one of the two items
    * waitFor(checkoutPage.quantityFirstProduct).click()
    * input(checkoutPage.quantityFirstProduct,'0')

    #hit the refresh button next to the quantity input to update the price
    * click(checkoutPage.refreshFirstProductButton)
    * delay(1500)

    #Validate that the new total checkout price increased accordingly
    * def newSum = text(checkoutPage.totalCart)
    * def newTotalCart = parseInt(newSum.replace(/[$,]/g,''))
    * assert newTotalCart > totalCart

