/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CertificadosPage } from "../support/pages/certficadosPage"
describe('Home Page', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const certficadosPage = new CertificadosPage()
    before('Preparamos el entorno', () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data
        })
    })
    beforeEach("BeforeEach", () => {
        cy.visit('')
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        cy.wait(1000)
    })
it('Elimino firma 1', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital()
    homePage.clickDocumentacion()
    cy.wait(2000)
    //certficadosPage.buscoFirma1('copia')
    cy.get('label > .form-control').type('aa')
    cy.wait(2000)
    cy.screenshot()
    certficadosPage.clickDelete()
    certficadosPage.clickBorroArchivos()
    cy.screenshot()
})
it('Elimino firma 2', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital()
    homePage.clickDocumentacion()
    cy.wait(2000)
    //certficadosPage.buscoFirma2('curriculum')
    cy.get('label > .form-control').type('bb')
    certficadosPage.clickDelete()
    certficadosPage.clickBorroArchivos()
    cy.screenshot()
})
it('Elimino firma3', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital()
    homePage.clickDocumentacion()
    cy.wait(2000)
    //certficadosPage.buscoFirma3('logica')
    cy.get('label > .form-control').type('cc')
    certficadosPage.clickDelete()
    certficadosPage.clickBorroArchivos()
    cy.screenshot()
})    
})