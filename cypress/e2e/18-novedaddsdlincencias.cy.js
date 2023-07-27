/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { HorariosPage } from "../support/pages/horariosPage"
import { VacacionesPage } from "../support/pages/vacacionesPage"
const numero = Math.floor(Math.random() * 1000)
describe('Probamos funcionalidad licencias', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const horariosPage = new HorariosPage()
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
    })
    it('Configurar Vacaciones', () => {
        cy.wait(1000)
        horariosPage.clickVacacionesylicencias()
        horariosPage.clickAgregar()
        cy.wait(4000)
        //horariosPage.seleccionEmpleado()
        //cy.get('#IdEmpleado').select('Cristian Torre (1)').or('contains', 'Argento Lucas (8)');
        horariosPage.seleccionamosLicencia()
        horariosPage.seleccionamosMotivo()
        //cy.get('#IdEmpleado').select('Argento Lucas (8)')
        //cy.get('#idTipo').select('Licencia')
        //cy.get('.input-group > #IdNovedad').select('Dia de Estudio')
        horariosPage.seleccionamosHasta()
        horariosPage.clickGuardarCambios2()
        horariosPage.clickEliminar()
        horariosPage.clickBorrar()
    })
})