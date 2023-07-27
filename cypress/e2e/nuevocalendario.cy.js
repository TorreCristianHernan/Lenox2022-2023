import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { CalendariosPage} from "../support/pages/calendariosPage"
describe('Test inicial loguearme', () => {
let loginData
let fecha = ['3'];
    const loginPage = new LoginPage()
    const homePage = new HomePage() 
    const calendariosPage = new CalendariosPage()
    const numero = Math.floor(Math.random() * 1000)
    
    before('Preparamos el entorno', () => {
    cy.fixture('fixtureSuite').then (data => {    
    loginData = data 
    })
})
    beforeEach("BeforeEach", () => {
        cy.visit('')
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        homePage.clickHorarios()
        homePage.clickCalendarios()
        calendariosPage.clickAgregar()
        cy.wait(1000)
        
    })
    it("Selecciono jornada", () => {
        //calendariosPage.clickLunesMes()
        // Seleccionamos los elementos que queremos guardar en un array
        calendariosPage.seleccionarEnero()
            //cy.get(':nth-child(1) > .month > :nth-child(3) > .Lu > .day-content')
            .then(($el) => {
              const elementValue = $el.text();
              const selectedElements = [elementValue];
              expect($el).to.have.class('selected');
              // Aquí puedes hacer cualquier otra verificación necesaria
            });
          
//cy.get(':nth-child(1) > .month > thead > :nth-child(2) > :nth-child(1)')
    })
})