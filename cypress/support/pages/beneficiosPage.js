export class BeneficiosPage {
    constructor() {
        this.descripcion = '#Descripcion';
        this.beneficiario = '#Beneficiario';
        this.agregarButton = 'AGREGAR'
        this.select='.input-group > #IdCategoria'
        this.empleado='#tableBodyEmpleados > :nth-child(1) > td'
        this.empresa='#IdEmpresa'
        this.sector='#IdSector'
        this.buscar='#TablaDeEmpleados_filter > label > .form-control'
        this.beneficia=':nth-child(1) > td > .checkbox > label'
        this.guardar='GUARDAR CAMBIOS'
        this.filtrar='#ListadoBeneficios_filter > label > .form-control'
        this.borrar='#btnBorrar > .material-icons'
        this.borrarbeneficio='BORRAR BENEFICIO'
    };
    escribirDescripcion(descripcion) {
        cy.get(this.descripcion).type(descripcion);
    };
    escribirBeneficiario(beneficiario) {
        cy.get(this.beneficiario).type(beneficiario);
    };
    clickAgregarBeneficio() {
        cy.contains(this.agregarButton).click();
    };
    seleccionarCategoria(select) {
        cy.get(this.select).select(select);
    };
    seleccionarEmpleado(empleado) {
        cy.get(this.empleado).click(empleado);
    };
    seleccionarEmpresa(empresa) {
        cy.get(this.empresa).select(empresa);
    };
    seleccionarSector(sector) {
        cy.get(this.sector).select(sector);
    };
    buscarBeneficiario(buscar) {
        cy.get(this.buscar).type(buscar);
    };
    clickBeneficiario() {
        cy.get(this.beneficia).click();
    };
    clickGuardarBeneficio() {
        cy.contains(this.guardar).click();
    };
    filtrarBeneficiario(filtrar) {
        cy.get(this.filtrar).type(filtrar);
    };
    clickBorrar() {
        cy.get(this.borrar).click();
    };
    clickBorrarBeneficio() {
        cy.contains(this.borrarbeneficio).click();
    };
};