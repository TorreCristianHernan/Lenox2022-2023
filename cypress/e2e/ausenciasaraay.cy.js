/// <reference  types="cypress" />
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { EmpleadosPage } from "../support/pages/empleadosPage";
import { AusenciasPage } from "../support/pages/ausencias";
import { values } from "cypress/types/lodash";
describe('Test funcionalidad Empleados', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const empleadosPage = new EmpleadosPage()
    const ausenciasPage = new AusenciasPage()
    const fechas = ['17/04/2023', '18/04/2023' , '19/04/2023','20/04/2023','21/04/2023'];
    const search = ['']
    //const numero = Math.floor(Math.random() * 1000)
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
    it('Editamos empleado y controlamos ausencia', () => {
        empleadosPage.buscoEmpleado(loginData.test1.usuario.apellido)
        empleadosPage.modificoEmpleado()
        empleadosPage.modificoCalendario()
        empleadosPage.modificoIngreso()//cy.get('#FechaIngreso').invoke('val', '2023-04-01').trigger('change')
        cy.screenshot()
        empleadosPage.clickGuardar()
    })
    it('Controlamos ausencia', () => {
        homePage.clickControl()
        homePage.clickAusencias()
        ausenciasPage.seleccionamosDesde()//cy.get('#Desde').invoke('val', '2023-04-17').trigger('change')
        ausenciasPage.seleccionamosHasta()
        cy.get('h1').click()
        cy.wait(4000)
        ausenciasPage.buscamosEmpleado()
        cy.wait(4000)//cy.get('#Hasta').invoke('val', '2023-04-19').trigger('change')
        cy.screenshot()
        
    
    fechas.forEach((texto) => {
      cy.contains('', texto)
        .should('exist');   
    });
})
    it('Controlamos ausencia editando', () => {
        homePage.clickControl()
        homePage.clickAusencias()
        ausenciasPage.seleccionamosDesde()//cy.get('#Desde').invoke('val', '2023-04-17').trigger('change')
        ausenciasPage.seleccionamosHasta()
        cy.get('h1').click()
        cy.wait(4000)
        ausenciasPage.buscamosEmpleado()
        search = (query) => {
            console.log(element.class(".sort-date"))
            return orders.filter(item => {
                return item.class.includes(query);
            })
        }
        const search = document.querySelectorAll('.sort-date');
        console.log(search)
        console.log(search)
        console.log(search)
        search.forEach(texto=> {
            console.log(texto)
            const texto = ".sort-date".textContent;
            console.log('',texto);
            });
});
}) 
