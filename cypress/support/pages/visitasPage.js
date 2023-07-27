export class VisitasPage {
    constructor() {
        this.agregarButton = 'AGREGAR';
        this.nombre='#Nombre';
        this.apellido='#Apellido';
        this.dni='#DNI';
        this.empresa='#EmpresaOrigen';
        this.puesto='#PuestoTrabajo';
        this.motivo='#Motivo';
        this.pertenencias='#Pertenencias'
        this.clickAgregarEmpleado='#modalNuevoEmpleado';
        this.guardarButton='GUARDAR CAMBIOS';
        this.borrarButton='#btnBorrar > .material-icons'
        this.bajaButton='DAR DE BAJA'
        this.busco='.form-control'
    };
    clickAgregar() {
        cy.contains(this.agregarButton).click();
    };
    nombreVisita(nombre) {
        cy.get(this.nombre).type(nombre);
    };
    apellidoVisita(apellido) {
        cy.get(this.apellido).type(apellido);
    };
    dniVisita(dni) {
        cy.get(this.dni).type(dni);
    }; 
    empresaVisita(empresa) {
        cy.get(this.empresa).type(empresa);
    }; 
    puestoVisita(puesto) {
        cy.get(this.puesto).type(puesto);
    };  
        motivoVisita(motivo) {
            cy.get(this.motivo).type(motivo);    
    };
    pertenenciasVisita(pertenencias) {
    
        cy.get(this.pertenencias).type(pertenencias);    
    };
    clickGuardarVisita() {
        cy.contains(this.guardarButton).click();
    };
    clickBorrar() {
        cy.get(this.borrarButton).click();
    };
    clickBaja() {
        cy.contains(this.bajaButton).click();
    };
    buscoVisita(busco) {
        cy.get(this.busco).type(busco);
    };
};