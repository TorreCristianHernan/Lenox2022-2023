export class HomeApp {
    constructor() {
        this.usuario = '#input-0';
        this.contraseña = '#input-2';
        this.menu = '.mdi-menu'
        this.beneficios=':nth-child(3) > .el-button > span > .btnSideBarText'
        this.perfil='Perfil'
        this.panel='Panel'
        this.cerrar='.cerrarSesion > p'
        this.cerrarsesion='[style="background-image: linear-gradient(to right, rgb(169, 80, 93) 0%, rgb(193, 69, 70) 100%); margin-top: 10px; margin-bottom: 20px;"] > .v-btn > .v-btn__content'
        this.notificaciones='.mdi-bell'
    };
    escribirUsuario(usuario) {
        cy.get(this.usuario).type(usuario);
    };
    escribirContraseña(contraseña) {
        cy.get(this.contraseña).type(contraseña);
    };
    clickMenuButton() {
        cy.get(this.menu).click();
    };
    clickBeneficiosButton() {
        cy.get(this.beneficios).click();
    };
    clickPerfilButton() {
        cy.contains(this.perfil).click();
    };
    clickPanelButton() {
        cy.contains(this.panel).click();
    };
    clickCerrarButton() {
        cy.get(this.cerrar).click();
    };
    clickCerrarsesionButton() {
        cy.get(this.cerrarsesion).click();
    };
    clickNotificacionesButton() {
        cy.get(this.notificaciones).click();
    };

};