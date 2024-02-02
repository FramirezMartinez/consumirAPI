import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrls: ['./tercer-componente.component.css']
})
export class TercerComponenteComponent implements OnInit {
  public numale: number;
  public year: number;
  public siglo:number;
  
  public numeros: number[] = [1, 2, 3, 4, 5];
  public duplicados: number[] = [];


  generarNumeroAleatorio(): void {
    this.numale = Math.floor(Math.random() * 100) + 1;
    console.log(this.numale);
  }


public  productos = [];

nombresEnMayusculas: string[] = [];




  constructor() {
    this.numale = 0;
    this.year = 0;
    this.siglo = 0;
   
    this.numeros = [1, 2, 3, 4, 5];  // Inicializa el array de números
    this.duplicados = [];  // Inicializa el array para los números duplicados
  
  
  }

  ngOnInit(): void {
    this.utilizarMap();
   this.utilizarMap2();
  //  this.nombresEnMayusculas = this.productos.map(producto => producto.nombre.toUpperCase());
    console.log(this.nombresEnMayusculas);
  }

  calcularSiglo() {
    this.siglo = Math.ceil(this.year / 100);
    console.log(this.siglo);
  }

 public utilizarMap(): void {
//    this.duplicados = this.numeros.pipe(map(numero => numero * 2));
    this.duplicados = this.numeros.map(numero => numero * 2);
   
  
  }

  public utilizarMap2(): void {
    // Uso de map en un array
    this.duplicados = this.numeros.map(numero => numero * 2);
    console.log('Duplicados (Array):', this.duplicados);

    // Uso de map con un observable
    const numerosObservable: Observable<number[]> = of(this.numeros);
    numerosObservable.pipe(map(numeros => numeros.map(numero => numero * 2)))
      .subscribe(duplicados => console.log('Duplicados (Observable):', duplicados));
  }

}
