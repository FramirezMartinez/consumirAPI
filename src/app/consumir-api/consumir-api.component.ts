import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-consumir-api',
  templateUrl: './consumir-api.component.html',
  styleUrls: ['./consumir-api.component.css']
})
export class ConsumirApiComponent implements OnInit {

  data: any[] = [];
  public arrayAux: any;
  public bandera: boolean = false;
 
  public filtroTexto: string = '';

  public itemSeleccionadoId: number | null = null;

  //ayudará a paginar esta vareable
  public page: number = 1;
  mostrarEspecie(itemId: number): void 
  {
   this.itemSeleccionadoId = itemId === this.itemSeleccionadoId ? null : itemId; // Esto permite alternar
  }

  constructor(private apiService: ApiService) 
  { 
   this.bandera = true;
   this.page=0;
  }

  ngOnInit(): void 
  {
    this.llenarData();
    this.llenarData2();
    this.filtrarDatos();
  }

  llenarData()
   {
    this.apiService.getData().subscribe(data =>
    {
     this.data = data;
     this.arrayAux = this.data.map((name: any) =>
     {
      const nuevof = { ...name };
      // Aquí puedes modificar nuevof como necesites
      return nuevof;
     });

      console.log('Datos modificados:', this.arrayAux);
    });
  }

  
estado(item: any): string
 {
  if (item && item.status) 
  {
   const statusLowerCase = item.status.toLowerCase();

   if (statusLowerCase === 'alive')
    {
      return 'Vivo';
    } 
    else if (statusLowerCase === 'dead')
    {
      return 'Muerto';
    }
     else if (statusLowerCase === 'unknown')
    {
      return 'Desconocido';
    }
     else
     {
      return 'Estado no reconocido';
     }
  } 
  else {
    return 'Item o status no definido';
  }
 }


 filtrarDatos(): void {
  console.log("Filtrando datos con texto:", this.filtroTexto);
  if (!this.filtroTexto) {
    this.arrayAux = this.data; // Si no hay texto de filtro, muestra todo
  }
 
  else  {
    this.arrayAux = this.data.filter((item) => {
      const filtro = item.name.toLowerCase().includes(this.filtroTexto.toLowerCase()) ||
                     item.species.toLowerCase().includes(this.filtroTexto.toLowerCase());
      return filtro;
    });
  }
  
  console.log("Resultados filtrados:", this.arrayAux);
}

evitarRecarga(event: Event) {
  event.preventDefault();
  this.filtrarDatos();
}


llenarData2() {
  this.apiService.getData1(this.page).subscribe({
    next: (response) => {
      this.data = [...this.data, ...response.results];
      this.arrayAux = this.data;
      console.log('Datos recibidos:', this.arrayAux);
      // Incrementa la página para la próxima carga
      this.page++;
    },
    error: (e) => console.error(e),
  });
}

cargarMas() {
  this.llenarData2();
} 



}
