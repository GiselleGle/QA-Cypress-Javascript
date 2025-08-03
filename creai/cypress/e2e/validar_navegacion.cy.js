import { HomePage } from '../pages/HomePage';
const home = new HomePage();

describe('Validación de navegación en creai.mx', () => {
  beforeEach(() => {
    home.visit();
    home.waitForPageLoad();
    home.acceptCookies(); 
  });

  it('Navega al hacer clic en el menú "About us"', () => {
    home.clickMenuItem('About us');
    home.verifyCurrentUrl('/about');
  });
});