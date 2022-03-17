
export class Checkout {
  
  totalPriceValidation(){
    cy.get('table > tbody > tr:nth-of-type(1) > td:nth-of-type(6)').then(($firstProduct) =>{
      const firstPrice = parseFloat(($firstProduct.text()).replace(/[$]/g,''));

      cy.get('table > tbody > tr:nth-of-type(2) > td:nth-of-type(6)').then(($secondProduct) =>{
        const secondPrice = parseFloat(($secondProduct.text()).replace(/[$]/g,''));

        cy.get('table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)').then(($totalCart) =>{
          const totalCartValue = parseFloat(($totalCart.text()).replace(/[$]/g,'')).toFixed(1);
          assert.equal((firstPrice+secondPrice),totalCartValue,'Ok!')
        });
      });
    });
  }
}