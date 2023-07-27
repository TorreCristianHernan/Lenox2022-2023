export class FeriadosPage {
    constructor() {
        this.agregarUsuario = 'AGREGAR'
        this.fecha = '#Fecha'
        this.val = 'val'
        this.fechas = '2023-05-16'
        this.feriado = '#Descripcion'
        this.guardar = 'GUARDAR CAMBIOS'
        this.borrarferiados = 'BORRAR FERIADO'
        this.close = 'close'
        this.busco = 'label > .form-control'
    };
    clickAgregar() {
        cy.contains(this.agregarUsuario).click();
    };
    seleccionamosFecha() {
        cy.get(this.fecha).invoke(this.val, this.fechas).trigger(this.val);
    };
    escribirFeriado(nombre) {
        cy.get(this.feriado).type(nombre);
    };
    clickGuardarCambios() {
        cy.contains(this.guardar).click();
    };
    clickClose() {
        cy.contains(this.close).click();
    };
    clickBorrarFeriado() {
        cy.contains(this.borrarferiados).click();
    };
    buscoFeriado(nombre) {
        cy.get(this.busco).type(nombre);
    };
};