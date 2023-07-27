/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
describe('Probamos y eliminamos funcionalidad preferencias', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    before('Preparamos el entorno', () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data
        })
    })
    it('Borro codigo y vuelvo a crear', () => {
        cy.visit('')
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        cy.screenshot()
        cy.screenshot()
        homePage.clickSistema()
        homePage.clickPreferencias()
        homePage.clickAnularRegistro()
        cy.wait(2000)
        cy.get('[onclick="javascript:AnularRegistro()"]').click()
        cy.screenshot()
        cy.wait(1000)
    })
})