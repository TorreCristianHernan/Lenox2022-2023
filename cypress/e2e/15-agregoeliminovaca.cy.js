/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { VacacionesPage } from "../support/pages/vacacionesPage"
describe('', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const vacacionesPage = new VacacionesPage()
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
        homePage.clickAdministracion()
        homePage.clickVacaciones()
        vacacionesPage.clickAgregarVacaciones()
    })
    it('Configurar Vacaciones', () => {
        cy.wait(4000)
        vacacionesPage.nombreVacaciones(loginData.test1.usuario.apellido)
        cy.wait(1000)
        vacacionesPage.clickGuardar()
        cy.screenshot()
        vacacionesPage.clickClose()
        vacacionesPage.clickEliminarVacas()
    })
})