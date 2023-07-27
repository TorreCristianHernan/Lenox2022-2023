import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { HorariosPage } from "../support/pages/horariosPage"
const numero = Math.floor(Math.random() * 1001);
describe('Probamos funcionalidad vacaciones', () => {
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
        cy.wait(1000)
        //horariosPage.seleccionEmpleado()
        horariosPage.seleccionamosHasta()
        horariosPage.clickGuardarCambios2()
        cy.wait(1000)
        //horariosPage.clickAgregar()
        //cy.wait(1000)
        //horariosPage.seleccionamosLicencia()
        //horariosPage.seleccionEmpleado()
        //horariosPage.seleccionamosMotivo()
        //horariosPage.seleccionamosHasta()
        //horariosPage.seleccionamosDesde()
        //horariosPage.clickMas()
        //cy.get('#divSelectNovedades > .input-group > .input-group-addon > .material-icons').click()
        //cy.wait(1000)
        //cy.get('#Codigo').type('alma'+ numero)
        //horariosPage.escribirCodigo(loginData.test1.usuario.aaa + numero)
        //cy.wait(1000)
        //cy.get('#Descripcion').type('alma'+numero)
        //horariosPage.escribirNovedad(loginData.test1.usuario.aaa + numero)
        //horariosPage.escribirDias(loginData.test1.usuario.dias)
        //horariosPage.clickNuevaNovedad()
        //cy.get('#DiasPermitidos').type('1')
        //cy.get('#modalNuevaNovedad > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        //horariosPage.clickGuardarCambios2()
        //horariosPage.clickEliminar()
        //horariosPage.clickEliminarvacas()
        //cy.contains('Borrar Vacación/Licencia').click()
        //cy.wait(2000)
        horariosPage.clickEliminar()
        horariosPage.clickEliminarvacas()

        //cy.contains('Borrar Vacación/Licencia').click()
    })
})