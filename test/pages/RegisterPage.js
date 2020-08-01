import BasePage from './BasePage';
import {userNew} from '../data/user.data';

class RegisterPage extends BasePage {

  get header(){
    return $('h1');
  }

  get firstName(){
    return $('#user_login_firstName');
  }

  get lastName(){
    return $('#user_login_lastName');
  }

  get email(){
    return $('#user_login_email');
  }

  get password(){
    return $('#user_login_password');
  }

  get checkboxTermsAndAgreements(){
    return $('.ant-checkbox');
  }

  get registerBtn(){
    return $('.ant-btn.ant-btn-primary');
  }

  open (path) {
     super.open('user/register')
  }

  userRegister(){
    this.firstName.setValue(userNew.firstName);
    this.lastName.setValue(userNew.lastName);
    this.email.setValue(userNew.email);
    this.password.setValue(userNew.password);
    this.checkboxTermsAndAgreements.click();
    this.registerBtn.click();
  }
}

export default new RegisterPage();