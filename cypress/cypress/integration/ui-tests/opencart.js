import {Register} from './pages/Register'
import {Plp} from './pages/Plp'
import { Whishlist } from './pages/Whishlist';

const register = new Register();
const plp = new Plp();
const whishlist = new Whishlist();

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

    })

  })
  