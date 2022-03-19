
# The Clash of Automation Titans! 

![](https://media.giphy.com/media/jlqNypsVwYUsYIGIc0/giphy.gif)

  

🔊 Ladies and gentlemen! I'm pleased to announce this wonderful battle 🤼‍♂️.

  

I'm your host [Gabriel Arocha](https://www.buymeacoffee.com/mrgabo) 🤪, and today we're gonna watch two of the most successful automation tools in the market, fighting each other where they are gonna show up who is the best!.

  

Let's meet our opponents!!!

  

# [Cypress](https://www.cypress.io/)

Cypress is a next generation **front end** testing tool built **for the modern web,** despite being often compared to Selenium, Cypress enables you to **write faster**, **easier** and **more reliable** tests. 🤩

  

## Cypress skills: 👊

![](https://media.giphy.com/media/l4Jz67s9xYmC79TC8/giphy.gif)

  

![GitHub top language](https://img.shields.io/github/languages/top/cypress-io/cypress?style=for-the-badge)

![GitHub Repo stars](https://img.shields.io/github/stars/cypress-io/cypress?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues-raw/cypress-io/cypress?style=for-the-badge)

![GitHub closed issues](https://img.shields.io/github/issues-closed/cypress-io/cypress?style=for-the-badge)

![GitHub contributors](https://img.shields.io/github/contributors/cypress-io/cypress?style=for-the-badge)  
  
    
  
# [KarateLabs](https://github.com/karatelabs/karate)

Karate is the **only** open-source tool to combine **API test-automation, [mocks](https://github.com/karatelabs/karate/blob/master/karate-netty), [performance-testing](https://github.com/karatelabs/karate/blob/master/karate-gatling) and even [UI automation](https://github.com/karatelabs/karate/blob/master/karate-core) into a single**, _unified_ framework 🤯

  

## Karate skills: 👊

![](https://media.giphy.com/media/YMkht8VN9qi6eWjQC0/giphy.gif)

  

![GitHub top language](https://img.shields.io/github/languages/top/karatelabs/karate?style=for-the-badge)

![GitHub Repo stars](https://img.shields.io/github/stars/karatelabs/karate?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues-raw/karatelabs/karate?style=for-the-badge)

![GitHub closed issues](https://img.shields.io/github/issues-closed/karatelabs/karate?style=for-the-badge)

![GitHub contributors](https://img.shields.io/github/contributors/karatelabs/karate?style=for-the-badge)

## 😠🤜 Fight Rules! 🤛😠

It consists in three rounds:

#### 1️⃣ - API Testing {...} ✅

#### 2️⃣ - UI Testing 🔎 🕵

#### 3️⃣ - General overview ✨

---
  
## 1️⃣  - Round 1 - API Testing

 **Target:** https://gorest.co.in  
 **Type of Api:** Restful.  
 **Methods under test:** GET / POST.  
 **Features to evaluate:** 

- Total time of execution.

- Status and body response validation.

- Schema validation.

- Reuse variables and/or file.

---
  
## 2️⃣  - Round 2 - UI Testing 

**Target:** https://demo.opencart.com/  
**Browser**: Google Chrome  
**Scenario to automate:**
					
	Scenario: Create a wishlist with two items and then remove them.	
	Given a user creates an account
	When adds two items to its wishlist
	Then it validates that the two items selected are displayed in the wishlist.
	And removes the two items from the wishlist.
					
	Scenario: Check the total price of a cart during in the checkout
	Given a user adds two items of its choice to the cart.
	When proceed to then checkout section
	And validates that the total price is equal to the sum of the two items added to the cart
	Then updates the quantity on one of the two items
	Then hits the refresh button next to the quantity input to update the price
	And validates that the new total checkout price increased accordingly

**Features to evaluate:**
- Total time of execution.

- Asserts according the requirements.

- POM  / Elements interaction (waits, locators, actions,etc).
  
---
  
## 3️⃣ - Round 3 - General overview
 - Setting up (How easy is to setup a project and execute) 
 - Code friendly (readilble, simplicity)
 - Comunity Support
 - Reports