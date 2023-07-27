export class LogApp {
    constructor() {
        this.usuario = '#input-0';
        this.contraseña = '#input-2';
        this.loginButton = '.textButton'
    };
    escribirUsuario(usuario) {
        cy.get(this.usuario).type(usuario);
    };
    escribirContraseña(contraseña) {
        cy.get(this.contraseña).type(contraseña);
    };
    clickLoginButton() {
        cy.get(this.loginButton).click();
    };
};