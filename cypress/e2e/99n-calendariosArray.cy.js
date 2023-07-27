import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CalendariosPage } from "../support/pages/calendariosPage"

describe('Asignamos Calendarios', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const calendariosPage = new CalendariosPage()
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
        homePage.clickCalendarios()
        calendariosPage.clickAgregar()
        cy.wait(1000)

    })
    it('Asignamos todos los dias  a una jornada', () => {
        calendariosPage.escribirNombreJornada(loginData.test1.usuario.jornada)
        calendariosPage.seleccionarEnero()
        calendariosPage.seleccionarFebrero()
        calendariosPage.seleccionarMarzo()
        calendariosPage.seleccionarAbril()
        calendariosPage.seleccionarMayo()
        calendariosPage.seleccionarJunio()
        calendariosPage.seleccionarJulio()
        calendariosPage.seleccionarAgosto()
        calendariosPage.seleccionarSeptiembre()
        calendariosPage.seleccionarOctubre()
        calendariosPage.seleccionarNoviembre()
        calendariosPage.seleccionarDiciembre()
        cy.screenshot()
        calendariosPage.clickMadrugada()
        calendariosPage.clickGuardarCambios()
        // Check array?
        cy.wait(3000)
        cy.get('#ListadoCalendarios_filter > label > .form-control').type('Temprano')
        cy.get('#btnModificar > .material-icons').click()
        calendariosPage.chequearDias()
        calendariosPage.clickGuardarCambios()
        cy.screenshot()
        cy.wait(4000)
        calendariosPage.BuscoJornada(loginData.test1.usuario.jornada)
        calendariosPage.clickEliminar()
        calendariosPage.clickBorrar()
    })
})