import BasePage from './BasePage';

class ProfilePage extends BasePage{
  get userNameText() {
    return $('h1');
  }
}

export default new ProfilePage();