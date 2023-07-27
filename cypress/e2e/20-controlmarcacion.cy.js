/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { MarcacionesPage } from "../support/pages/marcaciones"
describe('', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const marcacionesPage = new MarcacionesPage()
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
    it('Controlamos marcacion', () => {
        homePage.clickAdministracion()
        homePage.clickControl()
        homePage.clickMarcaciones()
        marcacionesPage.clickAgregar()
        //marcacionesPage.seleccionEmpleado()
        marcacionesPage.seleccionNovedad()
        marcacionesPage.seleccionamosFecha()
        marcacionesPage.clickHorasJustificadas()
        marcacionesPage.clickDiaSiguiente()
        marcacionesPage.escriboComentario()
        cy.screenshot()
        marcacionesPage.clickGuardarCambios()
    })
})
