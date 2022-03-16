export class Plp {
    navigate(){
       cy.visit('https://demo.opencart.com/index.php?route=product/category&path=20');
    }

    selectProducts(){
        cy.get('div#content > div:nth-of-type(4) > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)').click();
        cy.get('div#content > div:nth-of-type(4) > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)').click();
    }

    goToMyWhishlist(){
        cy.get('#wishlist-total').click();
    }
}