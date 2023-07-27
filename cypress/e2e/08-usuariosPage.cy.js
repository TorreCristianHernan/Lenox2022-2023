/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { UsuariosPage } from "../support/pages/usuariosPage"
describe('Probamos Funcionalidad Novedades', () => {
        let loginData
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const usuariosPage = new UsuariosPage()
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
        it('Creamos una nueva novedad', () => {
                homePage.clickUsuarios()
                usuariosPage.clickAgregar()
                cy.wait(1000)
                usuariosPage.escribirNombre(loginData.test1.usuario.nombre )
                usuariosPage.escribirApellido(loginData.test1.usuario.apellido) 
                usuariosPage.escribirDNI(loginData.test1.usuario.dni+ numero)
                usuariosPage.escribirEmail(loginData.test1.usuario.email+ numero)
                usuariosPage.escribirContrasena(loginData.test1.usuario.contrasena)
                usuariosPage.clickGuardaCambios()
                cy.screenshot()
        })
})
