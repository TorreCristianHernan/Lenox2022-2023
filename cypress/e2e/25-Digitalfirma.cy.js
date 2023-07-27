/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CertificadosPage } from "../support/pages/certficadosPage"
describe('Probamos  y eliminamos funcionalidad firma digital', () => {
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
it('Verifico que no se suba una archovo si no es pdf', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital() 
    homePage.clickDocumentacion()
    cy.wait(2000)
    cy.get('.dropper-dropzone').selectFile(
        [
            'cypress/images/dd.docx'
        ],
        {action: 'drag-drop'}
        )
        certficadosPage.buscoEmpleado('Todos')
        certficadosPage.clickCristian()
        certficadosPage.clickSelection()
        cy.wait(2000)
        certficadosPage.clickFirma()
})
        it('Firma1 Torre Cristian', () => {
        homePage.clickAdministracion()
        homePage.clickLegajoDigital() 
        homePage.clickDocumentacion()
        cy.get('.dropper-dropzone').selectFile(
        [
            'cypress/images/aa.pdf'
        ],
        {action: 'drag-drop'}
        )
        cy.wait(2000)
        cy.screenshot()
        certficadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
        certficadosPage.clickCristian()
        certficadosPage.clickSelection()
        certficadosPage.clickFirma()
})
it('Firma2 Torre Cristian', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital() 
    homePage.clickDocumentacion()
    cy.get('.dropper-dropzone').selectFile(
    [
        'cypress/images/bb.pdf'
    ],
    {action: 'drag-drop'}
    )
    cy.wait(2000)
    cy.screenshot()
    certficadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
    certficadosPage.clickCristian()
    certficadosPage.clickSelection()
    certficadosPage.clickFirma()
})
it('Firma3 Torre Cristian', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital() 
    homePage.clickDocumentacion()
    cy.get('.dropper-dropzone').selectFile(
    [
        'cypress/images/cc.pdf'
    ],
    {action: 'drag-drop'}
    )
    certficadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
    certficadosPage.clickCristian()
    certficadosPage.clickSelection()
    certficadosPage.clickFirma()
    //certficadosPage.clickguarde()  
})
})