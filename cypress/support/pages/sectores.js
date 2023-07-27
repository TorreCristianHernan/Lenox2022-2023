export class SectoresPage {
    constructor() {
        this.nombre = '#Descripcion';
        this.novedad = '#Descripcion';
        this.guardarcambios = 'GUARDAR CAMBIOS'
        this.agregarSector = 'AGREGAR'
        this.close = 'close'
        this.borrarsector = 'BORRAR SECTOR'
        this.busco ='label > .form-control'
    };
    clickAgregar() {
        cy.contains(this.agregarSector).click();
    };
        escribirNombre(nombre) {
            cy.get(this.nombre).type(nombre);
        };
        escribir(novedad) {
            cy.get(this.novedad).type(novedad);
        };
        clickGuardaCambios() {
            cy.contains(this.guardarcambios).click();
        };
        clickClose() {
            cy.contains(this.close).click();
        };
        clickBorrarsector() {
            cy.contains(this.borrarsector).click()
        };
        buscoSector(sector) {
            cy.get(this.busco).type(sector);
        };
    };
