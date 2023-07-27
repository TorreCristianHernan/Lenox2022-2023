export class AusenciasPage {
    constructor() {
        this.desde = '#Desde';
        this.hasta = '#Hasta';
        this.val = 'val'
        this.fechaDesde = '2023-01-01'
        this.fechaHasta='2023-04-19'
        this.change = 'change'
        this.loginButton = '#btnIngresar'
        this.empleado = 'label > .form-control'
        this.numero = 'Torre'
        this.have = 'have.text'
        this.fecha1 = 'tbody > :nth-child(1) > .sort-date'
        this.fecha2 = '.even > .sort-date'
        this.fecha3 = ':nth-child(3) > .sort-date'
        this.primerfecha = '02/01/2023'
        this.segundafecha = '03/01/2023'
        this.tercerfecha = '04/01/2023'
    };
    seleccionamosDesde() {
        cy.get(this.desde).invoke(this.val , this.fechaDesde).trigger(this.val);
    };
    seleccionamosHasta() {
        cy.get(this.hasta).invoke(this.val , this.fechaHasta).trigger(this.val);
    };
    buscamosEmpleado() {
        cy.get(this.empleado).type(this.numero);
    };
    verificoFecha1() {
        cy.get(this.fecha1).
        should(this.have , this.primerfecha);
    };
    verificoFecha2() {
        cy.get(this.fecha2).should(this.have , this.segundafecha);
    };
    verificoFecha3() {
        cy.get(this.fecha3).should(this.have , this.tercerfecha);
    };
    //cy.get('tbody > :nth-child(1) > .sort-date').should('have.text', '17/04/2023');
    //cy.get('.even > .sort-date').should('have.text', '18/04/2023');
    //cy.get(':nth-child(3) > .sort-date').should('have.text', '19/04/2023');
};