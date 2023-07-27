export class MultiplesPage {
    constructor() {
        this.nombre = '#Nombre'
        this.agregarButton = 'AGREGAR';
        this.jornada1 = 'Temprano';
        this.jornada2 = 'Torre';
        this.guardarCambios = 'GUARDAR CAMBIOS';
        this.eliminar = 'close';
        this.borrarJornada = 'BORRAR JORNADA'
        this.buscar='.form-control'
    };
    escribirNombre(nombre) {
        cy.get(this.nombre).type(nombre);
    };
    clickAgregar() {
        cy.contains(this.agregarButton).click()
    };
    clickJornada1() {
        cy.contains(this.jornada1).click()
    };
    clickJornada2() {
        cy.contains(this.jornada2).click()
    };
    clickGuardarCambios() {
        cy.contains(this.guardarCambios).click()
    };
    clickEliminar() {
        cy.contains(this.eliminar).click()
    };
    clickBorrarJornada() {
        cy.contains(this.borrarJornada).click()
    };
    buscoJornada1(jornada1) {
        cy.get(this.buscar).type(jornada1);
    };
    buscoJornada2(jornada2) {
        cy.get(this.buscar).type(jornada2);
    };
    //cy.get('.form-control').type('Torre')
}