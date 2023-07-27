/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { EmpresasPage } from "../support/pages/empresasPage"
describe('Probamos Funcionalidad Empresas', () => {
        let loginData
        const loginPage = new LoginPage()
        const empresasPage = new EmpresasPage()
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
        it('Creamos Empresa', () => {
                homePage.clickEmpresas()
                empresasPage.clickAgregar()
                cy.wait(1000)
                empresasPage.escribirEmpresa(loginData.test1.usuario.empresa)
                cy.contains('QA.').click()
                empresasPage.clickguargarEmpresa()
        
        })
})