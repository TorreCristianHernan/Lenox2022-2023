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
it('Verifico que no se suba una archovo si no es pdf', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital()
    certficadosPage.clickReciboSueldo()
    certficadosPage.clickDelete1()
    certficadosPage.clickBorroArchivos()
    //cy.get(':nth-child(7) > a > .material-icons').click()
    //cy.contains('Borrar Archivos').click()
})
})