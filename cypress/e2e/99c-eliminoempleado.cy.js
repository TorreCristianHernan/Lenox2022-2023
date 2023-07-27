/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { EmpleadosPage } from "../support/pages/empleadosPage"
import { CertificadosPage } from "../support/pages/certficadosPage";
describe('Test funcionalidad Empleados', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const empleadosPage = new EmpleadosPage()
    const certficadosPage = new CertificadosPage()
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
    })
    it('Creamos un nuevo empleado seleccionamos todas las marcaciones enviamos mail', () => {
        homePage.clickEmpleados()
        empleadosPage.buscoEmpleado("Torre")
        cy.get('td').contains('Torre Cristian').trigger('mouseover');
        cy.contains("delete").click({force: true})
        cy.screenshot()
        cy.get('[onclick="javascript:EliminarEmpleado()"]').click()        
    })
})