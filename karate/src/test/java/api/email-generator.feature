Feature: Email generator

  Scenario: Email generator
    * def getUniqueID = function(){ return Math.random().toString(36).substr(1, 10)  + '' }
    * def randomId = getUniqueID()
    * string getEmail = 'my'+randomId+'@anyweb.com'
