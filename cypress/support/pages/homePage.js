export class HomePage {
    constructor() {
        this.administracionButton = 'Administración';
        this.empleadosButton = 'Empleados';
        this.novedadesButton = 'Novedades'
        this.empresasButton = 'Empresas y sucursales'
        this.visitasButton = 'Visitas / Contratistas'
        this.sectoresButton= 'Sectores'
        this.usuariosButton = 'Usuarios'
        this.vacacionesButton= 'Configuración Vacaciones'
        this.horariosButton= 'Horarios'
        this.horariosmultiplesButton= 'Jornadas Múltiples'
        this.calendariosButton = 'Calendarios'
        this.control = 'Control'
        this.ausencias = 'Ausencias'
        this.marcacion = '#fichadasUrl'
        this.feriados= 'Feriados'
        this.preferencias = 'Preferencias'
        this.sistema = 'Sistema'
        this.anular = 'Anular Registro'
        this.legajo= 'Legajo Digital'
        this.firma='Certificados Firma'
        this.cartelera='Cartelera Digital'
        this.docu=':nth-child(7) > .tree-branch-parent > .tree-branch-child > ul > :nth-child(2) > a'
        this.beneficios='Beneficios'
    }
    clickAdministracion() {
        cy.contains(this.administracionButton).click();
    };
    clickEmpleados() {
        cy.contains(this.empleadosButton).click();
    };
    clickNovedades() {
        cy.contains(this.novedadesButton).click();
    };
    clickEmpresas() {
        cy.contains(this.empresasButton).click();
    };
    clickVisitas() {
        cy.contains(this.visitasButton).click();
    };
    clickSectores() {
        cy.contains(this.sectoresButton).click();
    };
    clickUsuarios() {
        cy.contains(this.usuariosButton).click();
    };
    clickVacaciones() {
        cy.contains(this.vacacionesButton).click();
    };
    clickHorarios() {
        cy.contains(this.horariosButton).click();
    };
    clickHorariosMultiples() {
        cy.contains(this.horariosmultiplesButton).click();
    };
    clickCalendarios() {
        cy.contains(this.calendariosButton).click();
    };
    clickControl() {
        cy.contains(this.control).click();
    };
    clickAusencias() {
        cy.contains(this.ausencias).click();
    };
    clickMarcaciones() {
        cy.get(this.marcacion).click();
    };
    clickFeriados(){
        cy.contains (this.feriados).click()
    }  
    clickPreferencias() {
        cy.contains(this.preferencias).click();
    }
    clickSistema() {
        cy.contains(this.sistema).click();
    }
    clickAnularRegistro() {
        cy.contains(this.anular).click();
    }
    clickLegajoDigital() {
        cy.contains(this.legajo).click();
    }
    clickCertificadosFirmas() {
        cy.contains(this.firma).click();
    }
    clickCarteleraDigital() {
        cy.contains(this.cartelera).click();
    }
    clickDocumentacion() {
        cy.get(this.docu).click()
    }
    clickBeneficios() {
    cy.contains(this.beneficios).click()
    }
}
