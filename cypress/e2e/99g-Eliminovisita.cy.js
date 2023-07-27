/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { VisitasPage } from "../support/pages/visitasPage"
describe('Probamos Funcionalidad Empresas', () => {
    let loginData
    const loginPage = new LoginPage()
    const visitasPage = new VisitasPage()
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
    it('Elimino Visita', () => {
        homePage.clickVisitas()
        cy.screenshot()
        //visitasPage.buscoVisita(loginData.test1.usuario.apellido)
        cy.wait(2000)
        cy.get('.form-control').type('torre')
        //visitasPage.clickBorrar()
        cy.get('td').contains('Torre').trigger('mouseover');
        cy.contains("delete").click({force: true})
        cy.screenshot()
        visitasPage.clickBaja()
    })
})