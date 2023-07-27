/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CarteleraPage } from "../support/pages/carteleraPage"
describe('Probamos y eliminamos funcionalidad cartelera digital', () => {
    let loginData
    const carteleraPage = new CarteleraPage()
    const loginPage = new LoginPage()
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
        cy.wait(1000)
    })
    it('Cartelera digital', () => {
        homePage.clickAdministracion()
        cy.screenshot()
        homePage.clickLegajoDigital()
        homePage.clickCarteleraDigital()
        carteleraPage.clickAgregar()
        cy.wait(2000)
        carteleraPage.escribirAsunto(loginData.test1.usuario.mes+ numero)
        carteleraPage.escribirTexto(loginData.test1.usuario.mes+ numero)
        carteleraPage.clickEmpleado()
        carteleraPage.clickTodos()
        carteleraPage.clickTodos()
        carteleraPage.clickGuardarCambios()
    })
})