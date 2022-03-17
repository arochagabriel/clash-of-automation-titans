
export class Checkout {
  
  checkTotalCartPrice(){
    cy.get('table > tbody > tr:nth-of-type(1) > td:nth-of-type(6)').then(($firstProduct) =>{
      const firstPrice = parseFloat(($firstProduct.text()).replace(/[$]/g,''));

      cy.get('table > tbody > tr:nth-of-type(2) > td:nth-of-type(6)').then(($secondProduct) =>{
        const secondPrice = parseFloat(($secondProduct.text()).replace(/[$]/g,''));

        cy.get('table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)').then(($totalCart) =>{
          const totalCartValue = parseFloat(($totalCart.text()).replace(/[$]/g,''));
          assert.equal((Math.round(firstPrice+secondPrice)),Math.round(totalCartValue),'Ok!');
        });
      });
    });

  }

  updateQuantityOfAProduct(){
    cy.get('table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)').then(($totalCart) =>{
      const totalCartValue = parseFloat(($totalCart.text()).replace(/[$]/g,''));

        cy.get('tbody > tr:nth-of-type(1) > td:nth-of-type(4) > div > input').click().type('0');
        cy.get('table > tbody > tr:nth-of-type(1) > td:nth-of-type(4) > div > span > button:nth-of-type(1)').click();
  
        cy.get('table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)').then(($currentPrice)=>{
          const currentTotal = parseInt(($currentPrice.text()).replace(/[$,]/g,''));
          assert.isAbove(currentTotal,totalCartValue,'Total price increased!')
        });
    });
  }
}