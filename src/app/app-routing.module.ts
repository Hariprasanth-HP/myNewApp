import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ValidateDropComponent } from './validate-drop/validate-drop.component';
import { TranslateDropComponent } from './translate-drop/translate-drop.component';

const routes: Routes = [

  { path: 'details', component: ValidateDropComponent },
  { path: 'videos', component: TranslateDropComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
