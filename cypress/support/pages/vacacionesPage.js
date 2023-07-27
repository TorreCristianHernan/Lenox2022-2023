export class VacacionesPage {
    constructor() {
        this.agregarVacaciones= 'AGREGAR CONVENIO' 
        this.nombre='#Nombre'
        this.guardarVacaciones='GUARDAR'
        this.desde = '#DiaDesde'
        this.hasta = '#DiaHasta'
        this.val = 'val'
        this.fechaDesde = '1'
        this.fechaHasta='20'
        this.change = 'change'
        this.mesD = '#MesDesde'
        this.mesH = '#MesHasta'
        this.agregarRango = 'Agregar Rango'
        this.mes='Abril'
        this.name ='Vaca'
        this.guardo = 'GUARDAR'
        this.guardarrango = 'GUARGAR RANGO'
        this.uno = '#DiasVacacionesSeleccionado'
        this.dos = '#DesdeAnosSeleccionado'
        this.tres = '#DesdeMesesSeleccionado'
        this.cuatro = '#DesdeDiasSeleccionado'
        this.cinco = '#HastaAnosSeleccionado'
        this.seis = '#HastaDiasSeleccionado'
        this.siete = '#HastaMesesSeleccionado'
        this.select = '1'
        this.selectd = '15'
        this.buscar = 'label > .form-control'
        this.close = ':nth-child(3) > #btnBorrar > .material-icons'
        this.eliminar = '[onclick="javascript:EliminarTablaAntiguedad()"]'
        this.nombre1='Vacaciones'
    };
    clickAgregarVacaciones() {
        cy.contains(this.agregarVacaciones).click();
    };
    nombreVacaciones(nombre) {
        cy.get(this.nombre).type(nombre)
    };
    clickGuardarVacaciones() {
        cy.contains(this.guardarVacaciones).click();
    };
    seleccionamosDesde() {
        cy.get(this.desde).invoke(this.val , this.fechaDesde).trigger(this.val);
    };
    seleccionamosHasta() {
        cy.get(this.hasta).invoke(this.val , this.fechaHasta).trigger(this.val);
    };
    seleccionamosMesDesde() {
        cy.get(this.mesD).select(this.mes);
    };
    seleccionamosMesHasta() {
        cy.get(this.mesH).select(this.mes);
    };
    clickAgregarRango() {
        cy.contains(this.agregarRango).click();
    };
    clickGuardar() {
        cy.contains(this.guardo).click();
    };
    clickGuardarRango() {
        cy.contains(this.guardarrango).click();
    };     
    seleccionamos1() {
        cy.get(this.uno).select(this.selectd)
    };
    seleccionamos2() {
        cy.get(this.dos).select(this.select)
    };
    seleccionamos3() {
        cy.get(this.tres).select(this.select)
    };
    seleccionamos4() {
        cy.get(this.cuatro).select(this.select)
    };
    seleccionamos5() {
        cy.get(this.cinco).select(this.selectd)
    };
    seleccionamos6() {
        cy.get(this.seis).select(this.select)
    };
    seleccionamos7() {
        cy.get(this.siete).select(this.select)
    };
    buscarVacaciones() {
        cy.get(this.buscar).type(this.aaa);
    };
    clickClose() {
        cy.get(this.close).click();
    };
    clickEliminarVacas() {
        cy.get(this.eliminar).click();
   
    };
    };