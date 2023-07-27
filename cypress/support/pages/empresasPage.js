export class EmpresasPage {
    constructor() {
        this.agregarEmpresa = 'AGREGAR'
        this.empresa = '#Descripcion'
        this.guardarEmpresa = 'GUARDAR CAMBIOS'
        this.eliminarEmpresa = 'close'
        this.borrarEmpresa = 'BORRAR EMPRESA'
        this.busco = 'label > .form-control'
        this.edit= 'edit'
        this.todos= 'Todos'
    };
    clickAgregar() {
        cy.contains(this.agregarEmpresa).click();
    };
    escribirEmpresa(empresa) {
        cy.get(this.empresa).type(empresa);
    };
    clickguargarEmpresa() {
        cy.contains(this.guardarEmpresa).click();
    };
    clickEliminarEmpresa() {
        cy.contains(this.eliminarEmpresa).click();
    };
    clickborrarEmpresa() {
        cy.contains(this.borrarEmpresa).click();
    };
    //cy.get('label > .form-control').type(loginData.test1.usuario.empresa)
    buscarEmpresa(empresa) {
        cy.get(this.busco).type(empresa);
    };
    clickEditarEmpresa() {
        cy.contains(this.edit).click();
    };
    clickSeleccionar() {
        cy.contains(this.todos).click();
    };
    };
    