/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { HorariosPage } from "../support/pages/horariosPage"
describe('Creamos jornada simple y normal', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const horariosPage = new HorariosPage()
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
        homePage.clickHorarios()
        horariosPage.clickJornadaSimple()
        horariosPage.clickAgregar()
        cy.wait(1000)
    })
    it('Creamos jornada simple y normal', () => {
        horariosPage.escribirJornada(loginData.test1.usuario.jornada)
        horariosPage.borrarHora()
        horariosPage.clickAgregarRango()
        cy.wait(1000)
        horariosPage.clickDiaSiguiente()
        horariosPage.clickGuardar()
        horariosPage.escribirHorario(loginData.test1.usuario.jornadaSimple)
        cy.wait(1000)
        horariosPage.clickAgregarRango()
        cy.wait(1000)
        horariosPage.clickDiaSiguiente()
        horariosPage.clickGuardar()
        horariosPage.clickGuardarCambios()
        cy.screenshot()
    })
    it('Creamos jornada siemple y normal', () => {
        horariosPage.escribirJornada(loginData.test1.usuario.apellido)
        horariosPage.borrarHora()
        horariosPage.escribirHorario(loginData.test1.usuario.jornadaSimple)
        cy.wait(1000)
        horariosPage.clickAgregarRango()
        cy.wait(1000)
        horariosPage.clickDiaSiguiente()
        horariosPage.clickGuardar()
        cy.wait(1000)
        horariosPage.clickAgregarRango()
        cy.wait(1000)
        horariosPage.clickDiaSiguiente()
        horariosPage.clickGuardar()
        cy.screenshot()
        horariosPage.clickGuardarCambios()
        cy.screenshot()
    })
})