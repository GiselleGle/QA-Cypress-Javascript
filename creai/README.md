# Tests Automatizados para creai.mx

Este repositorio contiene la suite de pruebas automatizadas para la plataforma **Creai**, enfocada en validar funcionalidades clave desde una perspectiva de usuario final (UI testing). La implementación sigue buenas prácticas de automatización como el patrón **Page Object Model (POM)**, uso de **assertions claras**, y una estructura modular y mantenible.

## Definicion del Test: 
Contiene pruebas automatizadas desarrolladas con Cypress para validar elementos clave y la navegación del sitio web 
 [https://www.creai.mx](https://www.creai.mx)

## Scope:
- Validación visual de elementos principales (logo, secciones, botón de contacto)
- Prueba de navegación desde el menú principal
- Implementación basada en Page Object Model (POM) para escalabilidad y mantenibilidad


Dependencias:
Las dependencias se manejan con npm y están definidas en `package.json`.

# Herramientas y Lenguajes Usados

| Herramienta | Propósito |
|-------------|-----------|
| **Cypress** | Testing end-to-end de UI |
| **JavaScript** | Lenguaje principal |
| **Node.js** | Entorno de ejecución |
| **Page Object Model (POM)** | Estructura del proyecto para mejorar el mantenimiento del código |
| **Gestor de Paquetes:** npm |
| **Control de Versiones:** Git + GitHub |
| **CI/CD Ready:** (Opcional) Puede integrarse con herramientas como GitHub Actions o Jenkins |



# Estructura del Proyecto
```bash
cypress/
├── e2e/
│   ├── validar_carga_creao.cy.js
│   ├── validar_elementos_clave.cy.js
│   └── validar_navegacion.cy.js
├── pages/
│   ├── HomePage.js
│   └── Header.js
├── videos/ 
├── screenshoot/ 
├── cypress.config.js       
├── package.json            
└── README.md               

```

# Instalacion y Configuracion
1. Clonar el repositorio
git clone https://github.com/GiselleGle/QA-Cypress-Javascript.git
cd QA-Cypress-Javascript

2. Instalar dependencias
npm install

3. Ejecutar pruebas
Para abrir la interfaz interactiva de Cypress (modo GUI):
npx cypress open

Para ejecutar pruebas en modo headless (por consola):
npx cypress run

# Autor: Creado por Giselle Gonzalez.


