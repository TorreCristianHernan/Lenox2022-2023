/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { HorariosPage } from "../support/pages/horariosPage"
import { MultiplesPage } from "../support/pages/multiplespage"
describe('Creamos jornada simple y normal', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const horariosPage = new HorariosPage
    const multiplesPage= new MultiplesPage()
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
        cy.wait(1000)
    })
    it('Eliminamos jornada temprano', () =>{
        multiplesPage.buscoJornada1(loginData.test1.usuario.jornada1)
        //cy.get('.form-control').type('temprano')
        multiplesPage.clickEliminar()
        //cy.contains('close').click()
        multiplesPage.clickBorrarJornada()
cy.screenshot()
    })
    it('Eliminamos jornada Torre', () =>{
        //cy.get('.form-control').type('Torre')
        multiplesPage.buscoJornada2(loginData.test1.usuario.jornada2)
        multiplesPage.clickEliminar()
        //cy.contains('close').click()
        multiplesPage.clickBorrarJornada()
})
})