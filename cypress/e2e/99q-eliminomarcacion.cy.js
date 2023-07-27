/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { MarcacionesPage } from "../support/pages/marcaciones"
describe('Marcaciones test', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const marcacionesPage = new MarcacionesPage()
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
    it('Borramos Marcacion', () => {
        homePage.clickAdministracion()
        homePage.clickControl()
        homePage.clickMarcaciones()
        marcacionesPage.seleccionamosHasta()
        marcacionesPage.clickBuscarMarcacion()
        cy.get('#IdEmpresa').select('No Asignado')
        cy.wait(2000)
        marcacionesPage.clickBorrar()
        marcacionesPage.clickBorrarMarcacion()
})
})