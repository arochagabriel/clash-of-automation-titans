export class Home{
    navigate(){
        cy.visit('https://demo.opencart.com/');
    }

    selectProducts(){
        cy.get('div#content > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > button:nth-of-type(1)').click();
        cy.get('div#content > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(3) > button:nth-of-type(1)').click();
    }

    goToTheCheckout(){
        cy.get('#cart-total').click();
        cy.visit('https://demo.opencart.com/index.php?route=checkout/checkout');
    }
}