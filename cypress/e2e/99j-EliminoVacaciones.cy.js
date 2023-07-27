/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { VacacionesPage } from "../support/pages/vacacionesPage"
const numero = Math.floor(Math.random() * 1000)
describe('Test inicial loguearme', () => {
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
    })
    it('Elimino Vacaciones', () => {
        cy.screenshot()
        cy.wait(2000)
        vacacionesPage.clickClose()
        cy.wait(2000)
        vacacionesPage.clickEliminarVacas()
        cy.screenshot()

    })
})