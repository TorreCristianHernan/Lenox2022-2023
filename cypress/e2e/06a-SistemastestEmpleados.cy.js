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
   //it('Creamos un nuevo empleado', () => {
        //homePage.clickEmpleados()
        //empleadosPage.clickAgregar()
        //cy.wait(1000)
        //empleadosPage.escribirNombre(loginData.test1.usuario.nombre)
        //empleadosPage.escribirApellido(loginData.test1.usuario.apellido)
        //empleadosPage.escribirDNI(loginData.test1.usuario.dni + numero)
        //empleadosPage.modificoIngreso()
        //empleadosPage.escribirLegajo(loginData.test1.usuario.legajo+numero)
        //empleadosPage.escribirPuestoTrabajo(loginData.test1.usuario.puesto+numero)
        //empleadosPage.clickGuardar()
        //cy.screenshot()
    //})
    it('Creamos un nuevo empleado seleccionamos todas las marcaciones enviamos mail', () => {
        homePage.clickEmpleados()
        empleadosPage.clickAgregar()
        cy.wait(1000)
        empleadosPage.escribirNombre(loginData.test1.usuario.nombre)
        empleadosPage.escribirApellido(loginData.test1.usuario.apellido)
        empleadosPage.escribirDNI(loginData.test1.usuario.dni)
        empleadosPage.modificoIngreso()
        empleadosPage.escribirLegajo(loginData.test1.usuario.legajo)
        empleadosPage.escribirPuestoTrabajo(loginData.test1.usuario.puesto + numero)
        empleadosPage.seleccionamostodoslosrelojes()
        empleadosPage.escribirEmail(loginData.test1.usuario.email1+ numero)
        cy.get('#IdCalendarioCliente').select('Temprano')
        cy.get('#IdEmpresaEmpleado').select('Lenox2023')
        cy.wait(3000)
        cy.get('#IdSectorEmpleado').select(loginData.test1.usuario.sector)
        cy.screenshot()
        empleadosPage.EnviamosMailPorLlegadasTarde()
        empleadosPage.SeleccionamosPuesto()
        //cy.contains('GUARDAR CAMBIOS').click()
        cy.screenshot()
        empleadosPage.clickCloud()
        cy.screenshot()
        cy.wait(4000)
        //empleadosPage.SeleccionVacaciones()
        //empleadosPage.SeleccionAusencias()
        empleadosPage.SeleccionMarcacion()
        empleadosPage.SeleccionMarcacion1()
        //empleadosPage.SeleccionMarcacion2()
       //empleadosPage.SeleccionJornada()
       //cy.xpath('/html/body/main/section/div[4]/form[1]/div[1]/div[2]/div/div[2]/div/div/div[4]/div/div[6]/div/label').click()
        empleadosPage.SeleccionDocumentacion()
        //empleadosPage.SeleccionNotificacion()
        cy.get('#tab_mi_web > .empleado-nuevo-tab-miweb > :nth-child(7) > .checkbox > label').click()
        empleadosPage.clickGuardar()
        cy.wait(4000)
        cy.screenshot()
        homePage.clickLegajoDigital()
        homePage.clickCertificadosFirmas()
        certficadosPage.clickCertificadoRaiz()
        cy.wait(2000)
        certficadosPage.escribirContraseña()
        cy.wait(4000)
        cy.get('.dropper-dropzone').click()

         //solo para lugares que digan arrastrar
        cy.get('.dropper-dropzone').selectFile(
            [
                //'cypress/images/carpeta.autamation.png',
            ],
            {action: 'drag-drop'}
            )
         //esto es solo para un input que le haces click
         //cy.get('input[type="file"]').attachFile(filepath)

        //certficadosPage.clickCrear()
        certficadosPage.clickCrear()
        certficadosPage.clickAgregar()
        cy.wait(2000)
        certficadosPage.seleccionamosTodos()
        certficadosPage.selecciono()
        certficadosPage.seleccionamosTodos()
        certficadosPage.clickCreo()
        certficadosPage.escribirPassword()
        certficadosPage.firma()     
    })   
})