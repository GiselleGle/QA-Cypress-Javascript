import { HomePage } from '../pages/HomePage';

const home = new HomePage();

describe('Validación de elementos clave en creai.mx', () => {
  beforeEach(() => {
    home.visit();
    home.waitForPageLoad();
    home.acceptCookies();
  });

  it('Muestra el logo de la marca', () => {
    home.logoIsVisible();
  });

  it('Existe un botón o enlace de contacto', () => {
    home.contactButtonExists();
  });

  it('Carga al menos 3 secciones visibles en la página', () => {
    home.verifyVisibleSectionsCount(3);

  });
});