/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage"
describe('', () => {
    let loginData
    const loginPage = new LoginPage()
    before('Preparamos el entorno', () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data
        })
    })
    it('Login', () => {
        cy.visit('')
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        cy.screenshot()
    })
})
