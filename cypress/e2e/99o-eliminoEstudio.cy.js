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
   it('Borramos Estudio', () => {
        homePage.clickEmpleados()
        empleadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
        empleadosPage.ClickTorreCristian()
        empleadosPage.ClickEstudios()
        empleadosPage.clickClose()
        empleadosPage.ClickBorrarEstudio()  
    })
})
