/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { NovedadesPage } from "../support/pages/novedadesPage"
describe('Probamos Funcionalidad Novedades', () => {
    let loginData
    const loginPage = new LoginPage()
    const novedadesPage = new NovedadesPage()
    const homePage = new HomePage()
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
    })
    it('Eliminamos nueva novedad1', () => {
        homePage.clickNovedades()
        novedadesPage.buscarNovedad()
        cy.screenshot()
        novedadesPage.clickClose()
        novedadesPage.clickBorrarnovedad()
        cy.screenshot()
    })
})