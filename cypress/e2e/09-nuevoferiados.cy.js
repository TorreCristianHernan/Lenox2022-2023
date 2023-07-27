/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import { FeriadosPage } from "../support/pages/feriadosPage"
describe('Creamos Feriado', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const feriadosPage = new FeriadosPage()
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
        homePage.clickHorarios()
        homePage.clickFeriados()
    })
    it('Creamos Feriado', () => {
        cy.screenshot()
        feriadosPage.clickAgregar()
        cy.wait(2000)
        feriadosPage.seleccionamosFecha()
        cy.wait(2000)
        feriadosPage.escribirFeriado(loginData.test1.usuario.apellido)
        feriadosPage.clickGuardarCambios()
        cy.screenshot()
        //feriadosPage.clickClose()
        //feriadosPage.clickBorrarFeriado()
    })
})
