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
    })
    it("Probamos Horarios Multiples", () => {
        cy.screenshot()
        multiplesPage.clickEliminar()
        multiplesPage.clickBorrarJornada()
    })
})