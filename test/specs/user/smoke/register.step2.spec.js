import RegisterStep2Page from '../../../pages/RegisterStep2Page';
import {userNew} from '../../../data/user.data';
import ProfilePage from '../../../pages/ProfilePage';
import {userNameText} from '../../../data/profile.data';

xdescribe('REGISTER STEP 2', () => {
  before(() =>{
  RegisterStep2Page.open();
  })

  it('should fill out phone number field', function() {
    RegisterStep2Page.phoneInputField.setValue(userNew.phone);
    expect(RegisterStep2Page.phoneInputField.getValue()).toEqual(userNew.phone)
  });

  it('should check that submit button is clickable ', function() {
    expect(RegisterStep2Page.submitBtn.isClickable()).true;
  });

  it('should check that click ', function() {
    RegisterStep2Page.submitBtn.click();
    browser.pause(1000)
    expect(ProfilePage.userNameText.getText()).toEqual(userNameText.name);
  });


})