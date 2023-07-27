export class NovedadesPage {
    constructor() {
        this.codigo = '#Codigo';
        this.novedad = '#Descripcion';
        this.agregarNovedaes = 'Novedades'
        this.guardarcambios = 'GUARDAR CAMBIOS'
        this.agregarNovedaes= 'AGREGAR'
        this.close= '#btnBorrar > .material-icons'
        this.borrarnovedad = 'BORRAR NOVEDAD'
        this.buscar ='label > .form-control'
        this.aaa = '011'
    };
    clickAgregarNovedad() {
        cy.contains(this.agregarNovedaes).click();
    };
        escribirCodigo(codigo) {
            cy.get(this.codigo).type(codigo);
        };
        escribirNovedad(novedad) {
            cy.get(this.novedad).type(novedad);
        };
        clickGuardaCambios() {
            cy.contains(this.guardarcambios).click();
        }
        buscarNovedad(aaa) {
            cy.get(this.buscar).type(this.aaa);
        };
        clickClose() {
            cy.get(this.close).click();
        }
        clickBorrarnovedad() {
            cy.contains(this.borrarnovedad).click()
        }
    }