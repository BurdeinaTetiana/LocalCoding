import BasePage from './BasePage';
import {userNew} from '../data/user.data';

class RegisterStep2Page extends BasePage{

  get header(){
    return $('h5');
  }

  get unitedStates(){
    return $('.ant-select-selection-item');
  }

  get phoneInputField(){
    return $('#user_login_phone');
  }

  get submitBtn(){
    return $('.ant-btn.ant-btn-primary');
  }


  open(path) {
    super.open('user/register-step2');
  }

  fillOutPhoneNumber() {
    this.phoneInputField.setValue(userNew.phone);
    // browser.waitUntil(() => this.submitBtn.isClickable());
    // browser.pause(1000);
    this.submitBtn.click();
}


}

export default new RegisterStep2Page();