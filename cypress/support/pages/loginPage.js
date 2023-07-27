export class LoginPage {
    constructor() {
        this.usuario = '#Usuario';
        this.contraseña = '#password';
        this.loginButton = '#btnIngresar'
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