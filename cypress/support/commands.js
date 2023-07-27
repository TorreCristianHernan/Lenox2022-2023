// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import "@cypress-audit/lighthouse/commands";

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('list not defined')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})
import { fechas } from "./pages/constantes";

//
Cypress.Commands.add('Fechas', () => {
    const fechas = [
      { Fecha: '17/04/2023', edad: 25 },
      { Fecha: '18/04/2023', edad: 30 },
      { Fecha: '19/04/2023', edad: 28 },
    ];
    return fechas;
  });
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })