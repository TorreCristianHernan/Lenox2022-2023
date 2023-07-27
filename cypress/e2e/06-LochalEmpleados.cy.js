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
   it('Creamos un nuevo empleado', () => {
        homePage.clickEmpleados()
        empleadosPage.clickAgregar()
        empleadosPage.escribirNombre(loginData.test1.usuario.nombre)
        empleadosPage.escribirApellido(loginData.test1.usuario.apellido)
        empleadosPage.escribirDNI(loginData.test1.usuario.dni + numero)
        empleadosPage.modificoIngreso()
        empleadosPage.escribirLegajo(loginData.test1.usuario.legajo+numero)
        empleadosPage.escribirPuestoTrabajo(loginData.test1.usuario.puesto+numero)
        cy.get('#IdCalendarioCliente').select('Temprano')
        cy.get('#IdEmpresaEmpleado').select('Lenox2023')
        cy.wait(3000)
        cy.get('#IdSectorEmpleado').select(loginData.test1.usuario.sector)
        cy.screenshot()
        empleadosPage.escribirEmail(loginData.test1.usuario.email1+ numero)
        empleadosPage.clickGuardar()
        
        cy.screenshot()
    })
})