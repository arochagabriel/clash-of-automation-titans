import { faker } from '@faker-js/faker';

export class Register {
    navigate(){
        cy.visit('https://demo.opencart.com/index.php?route=account/register');
    }

    formRegistration(){
        const name = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const telephone = faker.phone.phoneNumber();
        const password = faker.internet.password();

        cy.get('#input-firstname').type(name);
        cy.get('#input-lastname').type(lastName);
        cy.get('#input-email').type(email);
        cy.get('#input-telephone').type(telephone);
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);
        cy.get('input[name="agree"]').click();
        cy.get('input[type="submit"]').click();
        cy.get('#content > h1').should("have.text",'Your Account Has Been Created!');
        return this;
    }
}