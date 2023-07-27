export class EmpleadosPage {
    constructor() {
        this.agregarButton = 'AGREGAR';
        this.nombre = '#Nombre';
        this.apellido = '#Apellido';
        this.dni = '#DNI';
        this.legajo = '#Legajo';
        this.puesto = '#PuestoTrabajo'
        this.email = '#EmailCorp';
        this.agregarempleadoButton = '#modalNuevoEmpleado';
        this.guardarButton = 'GUARDAR CAMBIOS';
        this.borrarButton = '#btnBorrar > .material-icons';
        this.bajaButton = 'Dar de Baja';
        this.empleado = 'Torre';
        this.busco = '.form-control';
        this.modifico = 'Torre'
        this.turno = '#IdCalendarioCliente'
        this.select = 'Temprano'
        this.ingreso = '#FechaIngreso'
        this.fecha = '2023-01-01'
        this.val = 'val'
        this.change = 'change'
        this.close = 'close'
        this.eliminarButton = '[onclick="javascript:EliminarEmpleado()"]'
        this.relojesButton='#ListadoRelojes > tbody > :nth-child(1) > td > .checkbox'
        this.llegadastarde='[title="Seleccione si desea avisar al empleado por sus llegadas tarde"] > .checkbox > label'
        this.rol= '#IdRol' 
        this.admin= 'Admin' 
        this.cloud= '.nav > :nth-child(5) > a'
        this.vacation= '.empleado-nuevo-tab-miweb > :nth-child(1) > .checkbox > label'
        this.ausencias='.empleado-nuevo-tab-miweb > :nth-child(2) > .checkbox > label'
        this.marcacion= '[onclick="javascript: HabilitarFacial()"] > label'
        this.marcacion1='#opcionFacialBox > label'
        this.marcacion2='#opcionQRBox > label'
        this.jornad=':nth-child(4) > .checkbox > label'
        this.noti=':nth-child(5) > .checkbox > label'
        this.docu='#tab_mi_web > .empleado-nuevo-tab-miweb > :nth-child(6) > .checkbox > label'
        this.torreCris='Torre Cristian'
        this.estudios='Estudios'
        this.nuevosEstudios='NUEVO ESTUDIO'
        this.nombrestudio='#Titulo'
        this.lugar='#Establecimiento'
        this.estudia='#IdNivel'
        this.estudiando='Curso'
        this.estado='#IdEstado'
        this.esta='Cursando'
        this.promedio='#EstudioPromedioGuardar'
        this.guardarEstudios='GUARDAR ESTUDIO'
        this.borrarEstudios='BORRAR ESTUDIO'
    };
    clickAgregar() {
        cy.contains(this.agregarButton).click();
    };
    escribirNombre(nombre) {
        cy.get(this.nombre).type(nombre);
    };
    escribirApellido(apellido) {
        cy.get(this.apellido).type(apellido);
    };
    escribirDNI(dni) {
        cy.get(this.dni).type(dni);
    };
    escribirLegajo(legajo) {
        cy.get(this.legajo).type(legajo);
    };
    escribirPuestoTrabajo(puesto) {
        cy.get(this.puesto).type(puesto);
    };
    escribirEmail(email) {

        cy.get(this.email).type(email);
    };
    clickAgregarEmpleado() {
        cy.contains(this.agregarempleadoButton).click();
    };
    clickGuardar() {
        cy.contains(this.guardarButton).click();
    };
    clickBorrar() {
        cy.get(this.borrarButton).click();
    };
    clickBaja() {
        cy.contains(this.bajaButton).click();
    };
    editarEmpleado() {
        cy.contains(this.empleado).click();
    };
    buscoEmpleado(busco) {
        cy.get(this.busco).type(busco);
    };
    modificoEmpleado() {
        cy.contains(this.modifico).click()
    };
    modificoCalendario() {
        cy.get(this.turno).select(this.select);
    };
    modificoIngreso(turno) {
        cy.get(this.ingreso).invoke(this.val, this.fecha).trigger(this.change)
    };
    clickClose() {
        cy.contains(this.close).click();
    };
    clickEliminar() {
        cy.get(this.eliminarButton).click();
    };
    seleccionamostodoslosrelojes() {
        cy.get(this.relojesButton).click();
    };
    EnviamosMailPorLlegadasTarde() {
        cy.get(this.llegadastarde).click();
    };
    SeleccionamosPuesto() {
        cy.get(this.rol).select(this.admin)
    };
    clickCloud() {
    cy.get(this.cloud).should('have.text','Cloud').click();
    };
    SeleccionVacaciones() {
    cy.get(this.vacation).click();
    };
    SeleccionAusencias() {
        cy.get(this.ausencias).click();
    };
    SeleccionMarcacion() {
            cy.get(this.marcacion).click();
    }; 
    SeleccionMarcacion1() {
            cy.get(this.marcacion1).click();
    }; 
        SeleccionMarcacion2() {
            cy.get(this.marcacion2).click();
    };
        SeleccionJornada() {
            cy.get(this.jornad).click();
    }; 
        SeleccionNotificacion() {
            cy.get(this.noti).click();
    };
        SeleccionDocumentacion() {
            cy.get(this.docu).click();
    };    
        ClickTorreCristian() {
            cy.contains(this.torreCris).click();
    };
    ClickEstudios() {
        cy.contains(this.estudios).click();
};
    ClickNuevosEstudios() {
        cy.contains(this.nuevosEstudios).click();
};
    escribirEstudio(sistemas) {
        cy.get(this.nombrestudio).type(sistemas);
};
    escribirLugar(luga) {
        cy.get(this.lugar).type(luga);
};
    SeleccionamosEstudio() {
        cy.get(this.estudia).select(this.estudiando)
};
    SeleccionamosEstado() {
        cy.get(this.estado).select(this.esta)
};
    escribirPromedio(pro) {
        cy.get(this.promedio).type(pro);
};
    ClickGuardarEstudios() {
        cy.contains(this.guardarEstudios).click();
};
    ClickBorrarEstudio() {
    cy.contains(this.borrarEstudios).click();
};
}