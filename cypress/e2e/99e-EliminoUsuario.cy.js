/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { UsuariosPage } from "../support/pages/usuariosPage"
describe('Probamos Funcionalidad Novedades', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const usuariosPage = new UsuariosPage()
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
        homePage.clickUsuarios()
        usuariosPage.buscoUsuario(loginData.test1.usuario.apellido)
        cy.wait(2000)
        cy.screenshot()
        usuariosPage.clickClose()
        cy.wait(2000)
        cy.screenshot()
        usuariosPage.clickBorro()
    })
})                