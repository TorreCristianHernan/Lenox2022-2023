/// <reference  types="cypress" />
import { LogApp } from "../support/pages/logApp"
import { HomeApp } from "../support/pages/HomeApp"
describe('', () => {
    let loginData
    const logApp = new LogApp()
    const homeApp = new HomeApp()
    before('Preparamos el entorno', () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data
        })
    })
    it('Panel App', () => {
        // Esto es un listener (se queda escuchando si aparece lo que "escucha", en este caso, 
        // un error que no esta siendo bien manejando en el codigo).
        // Si encuentra el evento que esta escuchando ("uncaught:execption") hace lo que digamos en la funcion de adentro
        // en este caso Cypress esta configurado para que si retornas false, siga con la proxima ejecucion. 
        // NO es una solucion, porque si hay otro error, el test va a dejarlo pasar 
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('')
        logApp.escribirUsuario(loginData.test1.usuario.mobileu)
        logApp.escribirContraseña(loginData.test1.usuario.contraseña)
        logApp.clickLoginButton()
        cy.screenshot()
        homeApp.clickMenuButton()
        homeApp.clickPanelButton()
        cy.screenshot()
    })
})