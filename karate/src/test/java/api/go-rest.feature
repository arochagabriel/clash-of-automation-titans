Feature:

  Background:
    * url 'https://gorest.co.in/public/v2/'

  Scenario: GET - Get users
    * path "users"
    * method get
    * status 200
    * match each response contains {id:'#number', name:'#string', email:'#string', gender:'#string', status: '#string'}
    * print response

  Scenario: POST - Create a new user
    * def callGetEmailGenerator = call read('classpath:api/email-generator.feature')
    * def emailId = callGetEmailGenerator.getEmail
    * def customToken = read('token.txt')
    * header Authorization = customToken
    * path "users"
    * request
      """
      {
        "name": "Peter Thomas",
        "gender": "male",
        "email": #(emailId),
        "status": "active"
        }
      """
    * method post
    * status 201
    * match response contains {id:'#number', name:'Peter Thomas', email:#(emailId), gender:'male', status: 'active'}
    * print response