/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { NovedadesPage } from "../support/pages/novedadesPage"
describe('Probamos Funcionalidad Novedades', () => {
    let loginData
    const loginPage = new LoginPage()
    const novedadesPage = new NovedadesPage()
    const homePage = new HomePage()
    const numero = Math.floor(Math.random() * 1000)
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
    it('Creamos una nueva novedad', () => {
        homePage.clickNovedades()
        novedadesPage.clickAgregarNovedad(loginData.test1.usuario.describir)
        cy.wait(1000)
        novedadesPage.escribirCodigo(loginData.test1.usuario.codigo)
        novedadesPage.escribirNovedad(loginData.test1.usuario.nombre)      
        novedadesPage.clickGuardaCambios()
        cy.screenshot()
    })
})