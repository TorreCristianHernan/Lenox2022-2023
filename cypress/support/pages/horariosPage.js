export class HorariosPage {
    constructor() {
        this.agregarButton = 'AGREGAR';
        this.jornadasimple = 'Jornadas'
        this.jornada = '#Nombre'
        this.horario = '#HoraObligatorias'
        this.rango = '+ AGREGAR RANGO'
        this.hasta = '#diaSiguienteHasta'
        this.guardarButton = 'GUARDAR'
        this.cambiosButton = 'GUARDAR CAMBIOS'
        this.licencias = 'Vacaciones y Licencias'
        this.li = 'Licencia'
        this.lice= '#idTipo'
        this.hasta = '#diaSiguienteHasta';
        this.val = 'val';
        this.fechaHasta='2023-10-26'
        this.cambios2= 'GUARDAR CAMBIOS'
        this.eliminar= 'close'
        this.borro='[onclick="javascript:EliminarVacacionLicencia()"]'
        this.seleccion='#IdEmpleado'
        this.persona='Torre Cristian (1)'
        this.persona1='Argento Lucas (8)'
        this.motivos='.input-group > #IdNovedad'
        this.motivo='Cristian'
        this.fechaHasta1='2023-10-23'
        this.desde='#Desde'
        this.fechadesde='2023-10-22'
        this.vacaciones='BORRAR VACACIÓN/LICENCIA'
        this.codigo='#Codigo'
        this.novedad='#Descripcion'
        this.mas='#divSelectNovedades > .input-group > .input-group-addon > .material-icons'
        this.dias='#modalNuevaNovedad > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.nueva='#modalNuevaNovedad > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.fechas='#Hasta' 
        this.contains= 'contains'  
    };
    clickAgregar() {
        cy.contains(this.agregarButton).click();
    };
    clickJornadaSimple() {
        cy.contains(this.jornadasimple).click();
    };
    escribirJornada(jornada) {
        cy.get(this.jornada).type(jornada);
    };
    clickHorario(hora){
        cy.get (this.hora).type(hora)
    }
    borrarHora(){
        cy.get (this.horario).clear()
    }
    escribirHora(hora){
        cy.get (this.hora).clear().type(hora)
    }
    escribirHorario(horario){
        cy.get (this.horario).type(horario)
    } 
    clickAgregarRango() {
        cy.contains (this.rango).click();
    };
    clickDiaSiguiente() {
        cy.get(this.hasta).click();
    };
    clickGuardar() {
        cy.contains(this.guardarButton).click();
    };
    clickGuardarCambios() {
        cy.contains(this.cambiosButton).click();
    };
    clickVacacionesylicencias(){
        cy.contains(this.licencias).click()
    }
    seleccionamosLicencia() {
        cy.get(this.lice).select(this.li);
    };
    seleccionamosHasta() {
        cy.get(this.fechas).invoke(this.val , this.fechaHasta).trigger(this.val);
    };
    clickGuardarCambios2() {
        cy.contains(this.cambios2).click();
    };
    clickEliminar(){
        cy.contains (this.eliminar).click()
    }
    clickBorrar(){
    cy.get (this.borro).click()
}
seleccionEmpleado() {
    cy.get(this.seleccion).select(this.persona).or(this.contains , this.persona1);
};   
seleccionamosMotivo() {
    cy.get(this.motivos).select(this.motivo);
};    
seleccionamosHasta1() {
    cy.get(this.hasta).invoke(this.val , this.fechaHasta1).trigger(this.val);
};
seleccionamosDesde() {
    cy.get(this.desde).invoke(this.val , this.fechadesde).trigger(this.val);
};
clickEliminarvacas(){
    cy.contains (this.vacaciones).click()
}
escribirCodigo(codigo) {
    cy.get(this.codigo).type(codigo);
};
escribirNovedad(novedad) {
    cy.get(this.novedad).type(novedad);
};
clickMas() {
    cy.get(this.mas).click()
    }
    escribirDias(dias) {
        cy.get(this.dias).type(dias);
    };
    clickNuevaNovedad() {
        cy.get(this.nueva).click()
    };
};
