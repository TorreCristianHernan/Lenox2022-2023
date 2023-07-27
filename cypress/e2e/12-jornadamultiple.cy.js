import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { MultiplesPage } from "../support/pages/multiplespage"
describe('Probamos horarios multiples', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const multiplesPage = new MultiplesPage()
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
        homePage.clickHorarios()
        homePage.clickHorariosMultiples()
        cy.wait(2000)
        multiplesPage.clickAgregar()
    })
    it("Probamos Horarios Multiples", () => {
        cy.wait(2000)
        multiplesPage.escribirNombre(loginData.test1.usuario.username)
        cy.get('#ColorMultiple').invoke('val', '#b60066').trigger('change')
        cy.wait(3000)
        multiplesPage.clickJornada1()
        cy.wait(2000)
        multiplesPage.clickJornada2()
        multiplesPage.clickGuardarCambios()
        //multiplesPage.clickEliminar()
        cy.screenshot()
        //multiplesPage.clickBorrarJornada()
    })
})
