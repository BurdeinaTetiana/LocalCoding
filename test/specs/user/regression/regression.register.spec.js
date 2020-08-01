import RegisterPage from '../../../pages/RegisterPage';
import {headers} from '../../../data/register.data';

describe('REGISTER PAGE', () => {
  before( () => {
    RegisterPage.open()
  });

  it ('should header text is correct', () => {
    expect(RegisterPage.header.getText()).toEqual(headers.headerRegister)
  })

})