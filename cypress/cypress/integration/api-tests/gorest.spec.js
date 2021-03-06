
import {getUsersSchema} from '../../schemas/get-users-schema';
import {postUsersSchema} from '../../schemas/post-users-schema';
import {token} from '../../fixtures/token.json';
import { faker } from '@faker-js/faker';




describe('Testing Go rest endpoints', () => {
    context('GET /users', () => {
        it('should return a list with all users', { apiDisplayRequest: true }, () => {
            cy
            .api({
                method: 'GET',
                url: '/users'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body[0]).to.have.all.keys(
                        'id', 'name', 'email', 'gender', 'status'
                      )
                      cy.validateSchema(getUsersSchema,response.body)
                });
        });
    });

     context('POST /users',()=>{
        it('should create a new user', { apiDisplayRequest: true }, () => {
            const email = faker.internet.email();
            const fullName = faker.name.firstName() + ' ' +faker.name.lastName();
            const gender = faker.name.gender(true);
            cy
           .api({
                method: 'POST',
                url: '/users',
                auth: token,
                body: 
                {
                    name: fullName,
                    gender: gender,
                    email: email,
                    status: "active"
                    }
                })
                .should((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.body.name).to.equal(fullName)
                    expect(response.body.email).to.equal(email)
                    cy.validateSchema(postUsersSchema,response.body)
                });
            });
         }); 
});
