/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { SectoresPage } from "../support/pages/sectores"
describe('Probamos Funcionalidad Novedades', () => {
        let loginData
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const sectoresPage = new SectoresPage()
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
                homePage.clickSectores()
        })
        it('Creamos Sector', () => {
                sectoresPage.clickAgregar()
                cy.wait(1000)
                sectoresPage.escribirNombre(loginData.test1.usuario.sector)
                sectoresPage.clickGuardaCambios()
                cy.screenshot()
        })
})