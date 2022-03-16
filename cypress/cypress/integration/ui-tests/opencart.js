import {Register} from './pages/Register'
const register = new Register();

describe('Testing open cart website', () => {
    it('Creates a products whislist', () => {
        register.navigate();
        register.formRegistration();
    })
  })
  