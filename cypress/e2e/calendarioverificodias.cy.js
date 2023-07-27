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
    const elementValue= []
    const selectedElements=[]
    
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
        cy.get(':nth-child(1) > .month > :nth-child(3) > .Lu > .day-content').click()
        cy.get(':nth-child(1) > .month > :nth-child(3) > .Lu > .day-content').click()
            .then(($el) => {
              const elementValue = $el.text();
              const selectedElements = [elementValue];
              expect($el).to.have.class($el.text);// Aquí puedes hacer cualquier otra verificación necesaria
              
            });
          
//cy.get(':nth-child(1) > .month > thead > :nth-child(2) > :nth-child(1)')
    
      // Busca todos los elementos de la tabla que contienen fechas y los agrega al array
    cy.get('table tbody td:nth-child(1)').each(($fecha) => {
    fechas.push($fecha.text());
    }).then(() => {
    cy.log.equal(fecha)   

})
})
})