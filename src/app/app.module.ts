import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';
import { FormsModule }  from '@angular/forms';
import { ConsumirApiComponent } from './consumir-api/consumir-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    TercerComponenteComponent,
    ConsumirApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
