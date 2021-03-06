
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

# 😠🤜 Fight Rules! 🤛😠

It consists in three rounds:

#### 1️⃣ - API Testing {...} ✅

#### 2️⃣ - UI Testing 🔎 🕵

#### 3️⃣ - General overview ✨

---
  
## 1️⃣  - Round 1 - API Testing {...} ✅

 **Target:** https://gorest.co.in  
 **Type of Api:** Restful.  
 **Methods under test:** GET / POST.  
 **Features to evaluate:** 

- Total time of execution.

- Status and body response validation.

- Schema validation.

- Reusing variables and/or files.

---
  
## 2️⃣  - Round 2 - UI Testing  🔎 🕵

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
  
## 3️⃣ - Round 3 - General overview 📝 ✨

 - Setting up (How easy is to setup a project and execute) 
 - Code friendly (readilble, simplicity)
 - Comunity Support
 - Reports

---
# 🛑 Preparing the Ring 🛑 
1) For **Karate** you must install:  
  
	- Gradle >= 7.3.x  -> [how to install Gradle](https://gradle.org/install/#with-a-package-manager)    
  
2) For **Cypress** you must install:  
  
	- Node >= 14.16.0 -> [how to install Node](https://nodejs.org/es/download/)    
  
3) Clone the project:  
    
  		mkdir myFolder && cd myFolder
 		git clone git@github.com:arochagabriel/clash-of-automation-titans.git
        cd clash-of-automation-titans
  
0) *Optional* 
	- Docker -> [how to install Docker](https://docs.docker.com/desktop/mac/install/)  
  "wait, wat da heck is docker?" -> read [this](https://docs.docker.com/get-started/overview/) 🤓 

	
  
   
Having said that...  
![](https://media.giphy.com/media/adikIKGu30u6A/giphy.gif)
.  
.   
.  
.  
## 1️⃣  - Round 1 - FIGHT! 🥊🥋🔥  
- 🔥 Karate punches 👊  
Placed in the *Karate* folder type in your terminal

		cd karate && gradle test --tests ApiTestParallel -i

- 🔥 Cypress punches 👊   
Placed in the *Cypress* folder type in your terminal

		cd cypress && npm i && npm run api-test

- Wanna watch them punching each other at the same time?  🤜🤛  
  Placed in the root of the project (clash-of-automation-titans) folder  and type in your terminal

		docker-compose up karate_api_test cypress_api_test
		

## 2️⃣  - Round 2 - FIGHT! 🥊🥋🔥  
- 🔥 Karate punches 👊  
Placed in the *Karate* folder type  

		cd karate && gradle test --tests UiTest -i

- 🔥 Cypress punches 👊   
Placed in the *Cypress* folder and type in your terminal

		cd cypress && npm run cypress
  
	in the Cypress Dashboard **select opencart.spec.js**  

## 3️⃣ - Round 3 - General overview 📝 ✨
 - Setting up: _*Cypress*_ punchs first 👊 
	 	
	To evaluate this aspect I considered how quicky and easy could be to start a project and I must say that its _*Cypress*_. Immediately when you start a new cypress project you'll get a template with a full description even examples about how to start. Instead of Karate, where you'd need a little bit of knowledge in Java structure projects or the best of the cases using your favorite Ide
  
   
 - Code friendly:  _*Karate*_ punchs in the face 👊   
   
     
	
   I've been using _*Karate*_ since 2018 and I have to say that I love how simple and readable is, based on Gherkin, you'll get a whole picture of what it's been tested, but further than that, this tool supports, is capable to do a bunch of things that other cant do still.

   
      
	     
 - Comunity Support: _*Cypress*_ punchs 👊 
   
   Well, not pretty much to say on this, like it's described above _*Cypress*_ leads this chapter. But one important thing to mention is that from Stackoverflow, if you have any doubt with some 'silly' things or complex situations the same _*Karate*_ creator answers your question. 

 - Reports: _*Karate*_ punchs back 👊 
   
  From my perspective, from _*Karate*_ you have a great report not only based in Junit or html, but rich with details and simplicity that lets you have a full perspective, historical, tags, and other more stuff.
	  	
# The Results... 🤕🥴🥺😄 

Both are great tools, however, I believe that even when both support API and UI testing, I think that they are good in terms of the main reason why they came out. 

If you want to test API I suggest with no doubts: _*Karate*_, is simple, has an infinity of capabilities that is worthy, but please take a look at the documentation which its full description and is fully understandable.

BUT, for UI I really suggest _*Cypress*_ due to the ridiculously way about how fast it is. My only "complain" with this tool it's that if you want to execute the tests in parallel (which is a very important feature in automation) you have to pay for the enterprise version. 

In conclusion  
.   
.   
.   
.   
   

![](https://media.giphy.com/media/26Ffi42TZbsrwDwzu/giphy.gif)

**It will depend on your project, team, resources, etc.**   
   
If did you like this post, Let's drink a couple of coffee and talk about it -> [Here](https://www.buymeacoffee.com/mrgabo)   😃
   
Feel free to complement this project, adding your own flavor (Pull Request are Welcome!)   

Cheers! ✌ 😎
