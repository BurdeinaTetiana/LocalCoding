import LoginPage from '../../../pages/LoginPage';
import {admin} from '../../../data/user.data';
import ProfilePage from '../../../pages/ProfilePage';

describe('LOGIN USERS', () => {
  before(() => {
    LoginPage.open()
  })

  it('login as an admin', function() {
    LoginPage.userLogin(admin.email, admin.password);
    browser.pause(3000)
    expect(ProfilePage.userNameText.getText()).toEqual(admin.firstName + ' ' + admin.lastName);
  });

})

