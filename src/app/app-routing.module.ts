import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableClassesComponent } from './available-classes/available-classes.component';
import { AvailableTrainersComponent } from './available-trainers/available-trainers.component';


const routes: Routes = [
  {path: '' , component : AvailableClassesComponent , pathMatch: 'full'},
  { path: 'Classes' , component : AvailableClassesComponent},
  { path: 'Trainers', component : AvailableTrainersComponent },];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
