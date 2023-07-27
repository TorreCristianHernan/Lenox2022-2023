export class MarcacionesPage {
    constructor() {
    this.agregar='AGREGAR'
    this.persona='Torre Cristian (1)'
    this.persona1='Argento Lucas (8)'
    this.seleccion='#IdEmpleadoAModificar'
    this.noveda='#IdNovedad'
    this.novedad='Cristian'
    this.fecha='#Fecha'
    this.val='val'
    this.fechas='2023-12-25'
    this.cambios='GUARDAR CAMBIOS'
    this.horas='#HorasJustificadas > label'
    this.dia='.input-group-addon > .checkbox > label'
    this.comentarios='#Comentario'
    this.comentario='Estudios'
    this.fechas1='2023-12-30'
    this.fecha2='2023-12-01'
    this.hasta='#Hasta'
    this.desde='#Desde'
    this.borrar='#btnBorrar > .material-icons'
    this.borrarmarcacion='[onclick="javascript:EliminarFichada()"]'
    this.buscarmarcacion='label > .form-control'
    this.enter='{enter}'
    };
    clickAgregar() {
        cy.contains(this.agregar).click();
    };
    seleccionEmpleado() {
        cy.get(this.seleccion).select(this.persona);
    };
    seleccionEmpleado1() {
        cy.get(this.seleccion).select(this.persona1);
    };
    seleccionNovedad() {
        cy.get(this.noveda).select(this.novedad);
    };
    seleccionamosFecha() {
        cy.get(this.fecha).invoke(this.val , this.fechas).trigger(this.val);
    };
    clickHorasJustificadas() {
        cy.get(this.horas).click();
    };
    clickDiaSiguiente() {
        cy.get(this.dia).click();
    };
    clickGuardarCambios() {
        cy.contains(this.cambios).click();
    };
    escriboComentario() {
        cy.get(this.comentarios).type(this.comentario);
    };
    seleccionamosHasta() {
        cy.get(this.hasta).invoke(this.val , this.fechas1).trigger(this.val)
    }
    enterHasta() {
        cy.get(this.hasta).type(this.enter)
    }
    clickBorrar() {
        cy.get(this.borrar).click();
    };
    clickBorrarMarcacion() {
        cy.get(this.borrarmarcacion).click()  
}
seleccionamosDesde() {
    cy.get(this.desde).invoke(this.val , this.fechas2).trigger(this.val);
}
clickBuscarMarcacion() {
    cy.get(this.buscarmarcacion).type(this.novedad)  
}
}