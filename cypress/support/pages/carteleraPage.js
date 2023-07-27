export class CarteleraPage {
    constructor() {
        this.asunto = '#Asunto';
        this.texto = '#Texto';
        this.agregar = 'AGREGAR'
        this.empleado=':nth-child(2) > td > .checkbox > label'
        this.todos='Todos'
        this.cambios='GUARDAR CAMBIOS'
    };
    escribirAsunto(asunto) {
        cy.get(this.asunto).type(asunto);
    };
    clickEmpleado() {
        cy.get(this.empleado).click();
    };
    clickTodos() {
        cy.contains(this.todos).click();
    };
    escribirTexto(texto) {
        cy.get(this.texto).type(texto);
    };
    clickAgregar() {
        cy.contains(this.agregar).click();
    };
    clickGuardarCambios() {
        cy.contains(this.cambios).click();
    };
};