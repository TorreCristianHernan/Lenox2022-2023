export class CalendariosPage {
    constructor() {
        this.agregarCalendario = 'AGREGAR'
        this.enero = 'Enero'
        this.febrero = 'Febrero'
        this.marzo = 'Marzo'
        this.abril = 'Abril'
        this.mayo = 'Mayo'
        this.junio = 'Junio'
        this.julio = 'Julio'
        this.agosto = 'Agosto'
        this.septiembre = 'Septiembre'
        this.octubre = 'Octubre'
        this.noviembre = 'Noviembre'
        this.diciembre = 'Diciembre'
        this.madrugada= 'Torre'
        this.guardarCambios = 'GUARDAR CAMBIOS'
        this.eliminar = ':nth-child(1) > :nth-child(4) > #btnBorrar > .material-icons'
        this.borrar = 'BORRAR CALENDARIO'
        this.nombre = '#Nombre'
        this.lunes = 'Lu'
        this.martes = ':nth-child(1) > .month > thead > :nth-child(2) > :nth-child(2)'
        this.miercoles = ':nth-child(1) > .month > thead > :nth-child(2) > :nth-child(3)'
        this.jueves = 'Ju'
        this.viernes = ':nth-child(1) > .month > thead > :nth-child(2) > :nth-child(5)'
        this.jor='#ListadoCalendarios_filter > label > .form-control'
        this.jorn= 'Temprano'
        this.jorn1='Torre'
        this.busco='#ListadoJornadas_filter > label > .form-control'
        this.seleccionados = []
    }
    clickAgregar() {
        cy.contains(this.agregarCalendario).click();
    };
    escribirNombreJornada(nombre) {
        cy.get(this.nombre).type(nombre);
    };
    seleccionarEnero() {
        cy.contains(this.enero).dblclick();
    };
    seleccionarFebrero() {
        cy.contains(this.febrero).click();
    }
    seleccionarMarzo() {
        cy.contains(this.marzo).click();
    };
    seleccionarAbril() {
        cy.contains(this.abril).click();
    };
    seleccionarMayo() {
        cy.contains(this.mayo).click();
    };
    seleccionarJunio() {
        cy.contains(this.junio).click();
    };
    seleccionarJulio() {
        cy.contains(this.julio).click();
    };
    seleccionarAgosto() {
        cy.contains(this.agosto).click();
    };
    seleccionarSeptiembre() {
        cy.contains(this.septiembre).click();
    };
    seleccionarOctubre() {
        cy.contains(this.octubre).click();
    };
    seleccionarNoviembre() {
        cy.contains(this.noviembre).click();
    };
    seleccionarDiciembre() {
        cy.contains(this.diciembre).click();
    };
    clickMadrugada() {
        cy.contains(this.madrugada).click();
    };
    // clickGuardarCambios() {
    //     cy.contains(this.guardarCambios).click();
    // };
    clickEliminar() {
        cy.get(this.eliminar).click();
    };
    clickBorrar() {
        cy.contains(this.borrar).click();
    };
    clickLunes() {
        cy.contains(this.lunes).dblclick();
    };
    clickMartes() {
        cy.get(this.martes).dblclick();
    };
    clickMiercoles() {
        cy.get(this.miercoles).dblclick();
    };
    clickJueves() {
        cy.contains(this.jueves).dblclick();
    };
    clickViernes() {
        cy.get(this.viernes).dblclick();
    };
    clickLunesMes() {
        cy.contains(this.lunes).click();
    };
    clickMartesMes() {
        cy.get(this.martes).click();
    };
    clickMiercolesMes() {
        cy.get(this.miercoles).click();
    };
    clickJuevesMes() {
        cy.contains(this.jueves).click();
    };
    clickViernesMes() {
        cy.get(this.viernes).click();
    };
    seleccionamosDesde() {
        cy.get(this.desde).invoke(this.val , this.fechaDesde).trigger(this.val);
    };
    seleccionamosHasta() {
        cy.get(this.hasta).invoke(this.val , this.fechaHasta).trigger(this.val);
    };
    BuscoJornada(name) {
        cy.get(this.jor).type(name);
    };

    clickGuardarCambios() {
        // reiniciar el valor de this.seleccionados
        this.seleccionados= []
        // espera al resultado de encontrar todos los elementos HTML que sean de tipo td => <td class="day"> </td>
       cy.get("td.day")
       //esto va a devoler un ARRAY de elementos HTML =>
       // [dia1, dia2, dia3]
       //este .each lo que hace es iterar/recorrer cada elemento
        .each((elementoHTML) => {
            //si el elemento es null o undefined o un valor "falso" continua con el siguiente elemento
            if(!elementoHTML)return

            // aca lo que hace es sacar de ese elemeto que esta recorriendo (que es un array), el elemento de la primera posicion y su propiedad outerHTML
            // "<td class=\"day Do\" value=\"1703991600000\" style=\"box-shadow: rgb(44, 44, 209) 0px -4px 0px 0px inset;\"><div class=\"day-content\">31</div></td>"
            const element = elementoHTML[0]?.outerHTML
            if (element?.includes("rgb(0, 0, 1")){
                //aca preguntamos si el elemento tiene la propiedad rgb(44, 44, 209) que es el color seleccionado para esta jornada
                // push lo que hace es agregar a la ultima posicion del array este elemento    
                this.seleccionados.push(element)
                }
          })
        
          // luego de que hace todo esto, estamos mostrando la longitud del array  para chequear que sea 365(ya que en el test decimos que seleccione todo el año)
          //.then(()=> console.log(this.seleccionados.length))
        

        cy.contains(this.guardarCambios).click();
    };

    chequearDias(){
        const diasSeleccionados= []
        cy.get("td.day")
        //esto va a devoler un ARRAY de elementos HTML =>
        // [dia1, dia2, dia3]
        //este .each lo que hace es iterar/recorrer cada elemento
         .each((elementoHTML) => {
             //si el elemento es null o undefined o un valor "falso" continua con el siguiente elemento
             if(!elementoHTML)return
 
             // aca lo que hace es sacar de ese elemeto que esta recorriendo (que es un array), el elemento de la primera posicion y su propiedad outerHTML
             // "<td class=\"day Do\" value=\"1703991600000\" style=\"box-shadow: rgb(44, 44, 209) 0px -4px 0px 0px inset;\"><div class=\"day-content\">31</div></td>"
             const element = elementoHTML[0]?.outerHTML
             if (element?.includes("rgb(0, 0, 1")){
                 //aca preguntamos si el elemento tiene la propiedad rgb(44, 44, 209) que es el color seleccionado para esta jornada
                 // push lo que hace es agregar a la ultima posicion del array este elemento    
                 diasSeleccionados.push(element)
                 }
           }).then(()=>{
            expect(diasSeleccionados).to.deep.eq(this.seleccionados)
           })
        
    }

};