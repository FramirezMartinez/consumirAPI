import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumirApiComponent } from './consumir-api/consumir-api.component';

const routes: Routes = [
  {path: '', component: ConsumirApiComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
