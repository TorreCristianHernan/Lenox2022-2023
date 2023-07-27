export class PreferenciasPage {
    constructor() {
        this.empresa = '#txtRazonSocial'
        this.nombre= 'Lenox'
        this.numero= '12345678'
        this.cuit = '#txtCuit'
        this.guardar = 'GUARDAR CAMBIOS'
        this.select = '1'
        this.uno = '#HoraNocturnaHoraDesde'
        this.dos='#HoraNocturnaHoraHasta'
        this.tres='#HoraNocturnaMinutosDesde'
        this.cuatro='#HoraNocturnaMinutosHasta'
        this.guarde=':nth-child(4) > :nth-child(3) > .btn'
        this.nuevo='NUEVO PORCENTAJE'
        this.porcentaje='#Porcentaje'
        this.number='10'
        this.porsentaje='#GuardarNuevoPorcentaje'
        this.editar='.odd > :nth-child(2)'
        this.number2='20'
        this.cerrar='CERRAR'
        this.borramos='.odd > :nth-child(3) > #btnBorrar > .material-icons'
        this.borre='BORRAR PORCENTAJE'
    }
    escribirEmpresa() {
        cy.get(this.empresa).type(this.nombre)
    }
    escribirCuit() {
        cy.get(this.cuit).type(this.numero)
    }
    clickGuardar() {
        cy.contains(this.guardar).click();
    }
    seleccionamos1() {
        cy.get(this.uno).select(this.select)
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
    clickGuarde() {
        cy.get(this.guarde).click();
    }
    clickNuevoPorsentaje() {
        cy.contains(this.nuevo).click();
    }
    escribirPorcentaje() {
        cy.get(this.porcentaje).clear().type(this.number)
    }
    clickGuardarPorsentaje() {
        cy.get(this.porsentaje).click();
    }
    clickEditarPorcentaje() {
        cy.get(this.editar).click();
    }
    //cy.get('.odd > :nth-child(2)').click()
    escribirPorcentaje2() {
        cy.get(this.porcentaje).clear().type(this.number2)
    }
    clickCerrar() {
        cy.contains(this.cerrar).click();
    }
    clickBorramos() {
        cy.get(this.borramos).click();
    }
    clickBorre() {
        cy.contains(this.borre).click();
    }
    //cy.contains('Cerrar').click()
    //cy.get('.odd > :nth-child(3) > #btnBorrar > .material-icons').click()
    //cy.contains('Borrar Porcentaje').click()
}