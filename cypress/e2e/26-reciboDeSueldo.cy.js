/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CertificadosPage } from "../support/pages/certficadosPage"
describe('Probamos y eliminamos funcionalidad recibo de sueldo', () => {
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
    certficadosPage.clickReciboSueldo()
    cy.get('.dropper-dropzone').selectFile(
        [
            'cypress/images/33017332-05052023.pdf'
        ],
        {action: 'drag-drop'}
        )
    certficadosPage.clickConfiguro() 
    certficadosPage.clickguarde()
    certficadosPage.clickguarde1()
    certficadosPage.clickguarde2()
    certficadosPage.clickfirmo()
    certficadosPage.escriboclave(loginData.test1.usuario.contraseña)
    certficadosPage.clickFirmen()
    //cy.get('#modalPassCertificadoRaiz > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})    
})