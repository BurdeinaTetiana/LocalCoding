import RegisterPage from '../../../pages/RegisterPage';
import {headers2} from '../../../data/register.step2.data'
import RegisterStep2Page from '../../../pages/RegisterStep2Page';
import ProfilePage from '../../../pages/ProfilePage';
import {userNew} from '../../../data/user.data';


describe('REGISTER USER', () => {
    before( () => {
      RegisterPage.open()
    });

    it('should register user', function() {
      RegisterPage.userRegister()
      // expect(RegisterStep2Page.header.getText()).toEqual(headers2.headerStep2Page); Вариант 2
      browser.waitUntil(() => RegisterStep2Page.header.getText() === headers2.headerStep2Page);
    });

    it('should fill out phone number and finish registration ', function() {
      RegisterStep2Page.fillOutPhoneNumber();
      expect(ProfilePage.userNameText.getText()).toEqual(userNew.firstName + ' ' + userNew.lastName);
    });

  })
