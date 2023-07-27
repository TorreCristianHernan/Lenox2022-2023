/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { HorariosPage } from "../support/pages/horariosPage"
describe('Probamos la home Page', () => {
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
        cy.wait(1000)
    })
    it('Ingresamos a Administracion', () => {
        homePage.clickAdministracion()
        cy.screenshot()
    })
    it('Ingresamos a Empresas', () => {
        homePage.clickAdministracion()
        homePage.clickEmpresas()
        cy.screenshot()
    })
    it('Ingresamos a Visitas', () => {
        homePage.clickAdministracion()
        homePage.clickVisitas()
    }) 
    it('Ingresamos a Novedades', () => {
        homePage.clickAdministracion()
        homePage.clickNovedades()   
})
        it('Ingresamos a Sectores', () => {
        homePage.clickAdministracion()
        homePage.clickSectores()   
})
        it('Ingresamos a Empleados', () => {
        homePage.clickAdministracion()
        homePage.clickEmpleados()   
})
it('Ingresamos a Configurar Vacaciones', () => {
    homePage.clickAdministracion()
    homePage.clickVacaciones()   
})
it('Ingresamos a Legajo Digital', () => {
    homePage.clickAdministracion()
    homePage.clickLegajoDigital()   
})
it('Ingresamos a Horarios', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()   
})
it('Ingresamos a Jornadas', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()
    horariosPage.clickJornadaSimple()
    
})
it('Ingresamos a JornadasMultiples', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()
    homePage.clickHorariosMultiples()   
})
it('Ingresamos a Vacaciones y licencia', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()
    horariosPage.clickVacacionesylicencias()
})
it('Ingresamos a Feriados', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()
    homePage.clickFeriados()
})    
it('Ingresamos a Horarios', () => {
    homePage.clickAdministracion()
    homePage.clickHorarios()
    cy.contains('Planificacion horaria').click()
})
//it('Ingresamos a Horarios', () => {
    //homePage.clickAdministracion()
    //homePage.clickBeneficios()
//})
})