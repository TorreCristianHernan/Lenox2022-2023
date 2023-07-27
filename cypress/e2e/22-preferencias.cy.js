/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import { PreferenciasPage } from "../support/pages/preferenciasPage"
describe('Probamos y eliminamos funcionalidad Preferencias', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const preferenciasPage = new PreferenciasPage()
    const numero = Math.floor(Math.random() * 1000)
    before('Preparamos el entorno', () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data
        })
    })
    beforeEach('Login', () => {
        cy.visit('')
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        //homePage.clickSistema()
        homePage.clickPreferencias()
        cy.screenshot()
    })
    it('Creo una empresa', () => {
        preferenciasPage.escribirEmpresa()
        preferenciasPage.escribirCuit()
        preferenciasPage.clickGuardar()
    })
    it('Dias Vacaciones', () => {
        cy.screenshot()
        preferenciasPage.seleccionamos1()
        preferenciasPage.seleccionamos2()
        preferenciasPage.seleccionamos3()
        preferenciasPage.seleccionamos4()
        preferenciasPage.clickGuarde()
    })
})