import BasePage from './BasePage';
import {newUserCredentials} from '../data/login.data';

class LoginPage extends BasePage{

  get header(){
    return $('h1');
  }

  get email(){
    return $('#normal_login_email');
  }

  get password(){
    return $('#normal_login_password');
  }

  get loginBtn(){
    return $('[type="submit"]');
  }

  get linkCreateOne(){
    return $('[href="/user/register"]');
  }

  get linkResetIt(){
    return $('[href="/user/password/reset"]');
  }

  get signWithGoogle(){
    return ;
  }



  userLogin(email, password){
    this.email.setValue(email);
    this.password.setValue(password);
    this.loginBtn.click();
  }

  open (path) {
    super.open('user/login')
  }
}

export default new LoginPage();