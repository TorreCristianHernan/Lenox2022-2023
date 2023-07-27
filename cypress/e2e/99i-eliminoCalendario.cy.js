import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CalendariosPage } from "../support/pages/calendariosPage"
describe('Asignamos Calendarios', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const calendariosPage = new CalendariosPage()
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
        homePage.clickCalendarios()
    })
    it('Elimino Calendario', () =>{
        cy.screenshot()
        cy.get('.form-control').type('Temprano')
        calendariosPage.clickEliminar()
        calendariosPage.clickBorrar()
    })
})