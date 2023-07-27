/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { EmpleadosPage } from "../support/pages/empleadosPage";
import { AusenciasPage } from "../support/pages/ausencias";
describe('Test funcionalidad Empleados', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const empleadosPage = new EmpleadosPage()
    const ausenciasPage = new AusenciasPage()
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
        homePage.clickEmpleados()
    })

    //it('Editamos empleado', () => {
        //empleadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
        //empleadosPage.modificoEmpleado()
        //empleadosPage.modificoCalendario()
        //empleadosPage.modificoIngreso()//cy.get('#FechaIngreso').invoke('val', '2023-04-01').trigger('change')
        //cy.screenshot()
        //empleadosPage.clickGuardar()
    //})
    it('Controlamos ausencia', () => {
        homePage.clickControl()
        homePage.clickAusencias()
        ausenciasPage.seleccionamosDesde()//cy.get('#Desde').invoke('val', '2023-04-17').trigger('change')
        ausenciasPage.seleccionamosHasta()
        ausenciasPage.buscamosEmpleado()
        cy.wait(4000)//cy.get('#Hasta').invoke('val', '2023-04-19').trigger('change')
        cy.screenshot()
        ausenciasPage.verificoFecha1()
        //ausenciasPage.verificoFecha2()
        ausenciasPage.verificoFecha3()
        cy.screenshot()
        //cy.get('tbody > :nth-child(1) > .sort-date').should('have.text', '17/04/2023');
        //cy.get('.even > .sort-date').should('have.text', '18/04/2023');
        //cy.get(':nth-child(3) > .sort-date').should('have.text', '19/04/2023');
    })
})