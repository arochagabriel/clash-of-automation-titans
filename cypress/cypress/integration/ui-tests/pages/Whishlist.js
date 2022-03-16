export class Whishlist {
    deleteProducts(){
        cy.get('div#content > div:nth-of-type(1) > table > tbody > tr:nth-of-type(1) > td:nth-of-type(6) > a > i').click();
    }

    confirmProductsSelected(){
        cy.get('div#content > div:nth-of-type(1) > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2)').should("have.text",'Canon EOS 5D');
        cy.get('div#content > div:nth-of-type(1) > table > tbody > tr:nth-of-type(2) > td:nth-of-type(2)').should("have.text",'Apple Cinema 30"');
    }

    isEmpty(){
        cy.get('div#content > p').should("have.text",'Your wish list is empty.');
    }
}