import {Register} from './pages/Register'
import {Plp} from './pages/Plp'
import { Whishlist } from './pages/Whishlist';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';

const register = new Register();
const plp = new Plp();
const whishlist = new Whishlist();
const home = new Home();
const checkout = new Checkout();

describe('Testing open cart website', () => {
  it('Creates a whislist and then delete it', () => {
       
    //create an account
    register.navigate();
    register.formRegistration();
       
    //add two items to your account wish list
    plp.navigate();
    plp.selectProducts();
    plp.goToMyWhishlist();
       
    //confirm and remove the two items from the wishlist
    whishlist.confirmProductsSelected();
    whishlist.deleteProducts();
    whishlist.deleteProducts();
    whishlist.isEmpty();

  });

  it('Checks products in the checkout',()=>{
    home.navigate();
    home.selectProducts();
    home.goToTheCheckout();

  });

});
  