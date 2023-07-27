export class UsuariosPage {
    constructor() {
        this.agregarUsuario = 'AGREGAR'
        this.nombre = '#Nombre'
        this.apellido = '#Apellido'
        this.dni = '#DniUsuario'
        this.email = '#Email'
        this.contrasena= '#txtClave'
        this.guardarcambios='GUARDAR CAMBIOS'
        this.busco ='.form-control'
        this.borro = 'BORRAR USUARIO'
        this.have = 'have.text'
        this.name = 'Torre Cristian'
        this.close='#btnBorrar > .material-icons'
    };
    clickAgregar() {
        cy.contains(this.agregarUsuario).click();
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
        escribirEmail(email) {
            cy.get(this.email).type(email);
        };
        escribirContrasena(contrasena) {
            cy.get(this.contrasena).type(contrasena);
        };
        clickGuardaCambios() {
            cy.contains(this.guardarcambios).click();
        };
        buscoUsuario(apellido) {
            cy.get(this.busco).type(apellido);
        };
        clickClose() {
            cy.get(this.close).click()
        };
        clickBorro() {
            cy.contains(this.borro).click();
        };
    };