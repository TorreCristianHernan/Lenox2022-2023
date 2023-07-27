/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { VisitasPage } from "../support/pages/visitasPage"
const numero = Math.floor(Math.random() * 1000)
describe('Probamos Funcionalidad Empresas', () => {
        let loginData
        const loginPage = new LoginPage()
        const visitasPage = new VisitasPage()
        const homePage = new HomePage()
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
        it('Creamos Visita y damos de baja', () => {
                homePage.clickVisitas()
                visitasPage.clickAgregar()
                cy.wait(1000)
                visitasPage.nombreVisita(loginData.test1.usuario.apellido+numero)
                visitasPage.apellidoVisita(loginData.test1.usuario.apellido)
                visitasPage.dniVisita(loginData.test1.usuario.dni+ numero)
                visitasPage.empresaVisita(loginData.test1.usuario.empresa)
                visitasPage.puestoVisita(loginData.test1.usuario.puesto)
                visitasPage.motivoVisita(loginData.test1.usuario.motivo)
                visitasPage.pertenenciasVisita(loginData.test1.usuario.pertenencia)
                visitasPage.clickGuardarVisita()
                //visitasPage.clickBorrar()
                //visitasPage.clickBaja()
                cy.screenshot()
        })
})