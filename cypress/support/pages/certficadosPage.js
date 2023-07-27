export class CertificadosPage {
    constructor() {
        this.certificado ='[onclick="javascript:ModificarCertificadoRaiz(0)"]'
        this.clave='Lenox2023'
        this.contraseña='#Password'
        this.crear='#modalNuevoCertificadoRaiz > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.agregar='AGREGAR'
        this.todos=':nth-child(1) > td > .checkbox > label'
        this.seleccion=':nth-child(5) > td > .checkbox > label'
        this.creo=':nth-child(2) > :nth-child(1) > :nth-child(3) > .btn-primary'
        this.pasword='#PasswordRoot'
        this.firmamos='Firmar Certificado'
        this.documentacion='Documentación'
        this.todos=':nth-child(1) > td > .checkbox > label'
        this.select='#modalSeleccionarEmpleados > .modal-dialog > .modal-content > .modal-header'
        this.firme='#firmar-y-guardar'
        this.cristian='#tableBodyEmpleados > .odd > td > .checkbox > label'
        this.delete=':nth-child(8) > a > .material-icons'
        this.borro='BORRAR ARCHIVOS'
        this.firmando='label > .form-control'
        this.recibo='Recibos de sueldo'
        this.busco='#TablaDeEmpleados_filter > label > .form-control'
        this.apellido='Torre'
        this.configurar='CONFIGURAR'
        this.guarde=':nth-child(7) > label'
        this.guarde1='#modal-danger-configurar-recibos > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > label'
        this.guarde2='#btnGuardarConfiguracionRecibos'
        this.firmo=':nth-child(6) > a > img'
        this.escribi='#passwordCertificado'
        this.delete1=':nth-child(7) > a > .material-icons'   
        this.firrecibo='#modalPassCertificadoRaiz > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    }
    clickCertificadoRaiz() {
        cy.get(this.certificado).click();
    };
    escribirContraseña(){
        cy.get(this.contraseña).type(this.clave)
    }
    clickCrear() {
        cy.get(this.crear).click();
    };
    clickAgregar() {
        cy.contains(this.agregar).click();
    };
    seleccionamosTodos() {
        cy.get(this.todos).click();
    };
    selecciono() {
        cy.get(this.seleccion).click();
    };
    clickCreo() {
        cy.get(this.creo).click();
    };
    escribirPassword(){
        cy.get(this.pasword).type(this.clave)
    }
    firma() {
        cy.contains(this.firmamos).click();
    };
    clickDocumentacion() {
        cy.contains(this.documentacion).click();
    }
    clickTodos() {
    cy.get(this.todos).click()    
};
    clickSelection() {
    cy.get(this.select).click()
};
    clickFirma() {
    cy.get(this.firme).click()
};
    clickCristian() {
    cy.get(this.cristian).click()
};
    clickDelete(){
    cy.get(this.delete).click()    
}; 
    clickBorroArchivos(){
    cy.contains(this.borro).click()
};
    buscoFirma1(imagen1){
    cy.get(this.firmamos).type(imagen1) 
};
    buscoFirma2(imagen2){
    cy.get(this.firmamos).type(imagen2) 
};
    buscoFirma3(imagen3){
    cy.get(this.firmando).type(imagen3) 
};
    clickReciboSueldo() {
    cy.contains(this.recibo).click();
};
    buscoEmpleado(apellido) {
    cy.get(this.busco).type(apellido);
};
    clickConfiguro() {
    cy.contains(this.configurar).click() 
};
    clickguarde() {
    cy.get(this.guarde).click()
};
    clickguarde1() {
    cy.get(this.guarde1).click()
};
    clickguarde2() {
    cy.get(this.guarde2).click()
};
    clickfirmo() {
    cy.get(this.firmo).click()
};
     escriboclave(escribi) {
     cy.get(this.escribi).type(escribi)   
     };
     clickFirmen() {
     cy.get(this.firrecibo).click()   
     };
     clickDelete1(){
        cy.get(this.delete1).click()    
    };
}    
