import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {random } from 'lodash';
@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  
  public nombre: string = 'Francisco';
  public apellido: string = 'Ramirez';
  public bandera: boolean = false;
  public arrayAux:any; 


//datos para la tabla
  alumnos = [
    { nombre: 'Francisco', apellido1: 'Ramírez', apellido2:'Martinez' },
    { nombre: 'Marcos', apellido1: 'Sánchez', apellido2:'Del Carmen'},
    { nombre: 'Saúl', apellido1: 'Nava', apellido2:'Luciano' }
  ];


  constructor() {

    this.arrayAux=[];
    // Constructor
  }

  ngOnInit() {
    // Método que se ejecuta después de la creación del componente
  this.function1();
  this.miFuncion2();
  }

  public CambiarNombre() {
    this.nombre = 'Pedro Ramirez';
    console.log('Nombre cambiado a:', this.nombre);
    this.bandera = true;
    console.log('bandera:', this.bandera);
  }


mostrarTexto: string = '';
styleClass: string = '';

// Define una función que se ejecutará al hacer clic en un botón.
onButtonClick(mostrarTexto: number): void {
  
  switch (mostrarTexto)
  {
   
    case 1:
           this.mostrarTexto = 'Nombre Botón 1';
           this.styleClass = 'style-1';
    break;
    
    
    case 2:
    
           this.mostrarTexto = 'Nombre Botón 2';
           this.styleClass = 'style-2';
    break;

    case 3:
          this.mostrarTexto = 'Nombre Botón 3';
          this.styleClass = 'style-3';
    break;

    
    case 4:
      
      this.mostrarTexto = 'Nombre Botón 4';
      
      this.styleClass = 'style-4';
    break;

    // Caso por defecto: No se ha hecho clic en ningún botón, reinicia el texto y la clase.
    default:
      // Reinicia la variable de texto.
      this.mostrarTexto = '';
      // Reinicia la variable de clase de estilo.
      this.styleClass = '';
    break;
   }
 }

 public diasSeleccionados:any;

 public diasSemana: any=
  [
    {dia: 'Todos los lunes', diaSolo: 'Lunes'},
    {dia: 'Todos los martes', diaSolo: 'Martes'},
    {dia: 'Todos los miércoles', diaSolo: 'Miercoles'},
    {dia: 'Todos los jueves', diaSolo: 'Jueves'},
    {dia: 'Todos los viernes', diaSolo: 'Viernes'},
    {dia: 'Todos los sabado', diaSolo: 'Sabado'},
    {dia: 'Todos los domingo', diaSolo: 'Domingo'},

  ];

  public function1() {
    this.diasSeleccionados='N/A'
    
    let contador: number=0;
    let acomulador:number=0;
     
    this.diasSemana.forEach( (elemento:  any)=>
    {
     
     elemento.id=++contador;

   
     acomulador=contador+acomulador;
     elemento.id=acomulador
     
    }
    
    );

    console.log(this.diasSemana);
   
  }
 public miFuncion2()
 {
   this.arrayAux=this.diasSemana.map((dia:any)=>
   {
    const nuevoDia={...dia};

    nuevoDia.id2=random(1,10);
    return nuevoDia;
   });
   console.log(this.arrayAux);
 }
 

  public mostrarArrayMod()
  {
   console.log(this.diasSemana);
   
  }
  
/*funtion.map
funtion poner un año y mostrar en que siglo pertenece estoo es igual  a obtener el impar
a que siglo perteneces

como generar numeors random y meterlos en una vareable
*/
}

