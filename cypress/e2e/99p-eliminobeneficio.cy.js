/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { BeneficiosPage } from "../support/pages/beneficiosPage"
describe('Probamos la home Page', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const beneficiosPage = new BeneficiosPage()
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
    it('Ingresamos a Administracion', () => {
        homePage.clickAdministracion()
        cy.screenshot()
        homePage.clickBeneficios()
        beneficiosPage.filtrarBeneficiario(loginData.test1.usuario.apellido)
        beneficiosPage.clickBorrar()
        beneficiosPage.clickBorrarBeneficio()
    })
})