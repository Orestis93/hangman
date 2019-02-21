import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './components/word/word.component';
import { WordGuard } from './guards/word.guard';
const routes: Routes = [
  { path: '', component: WordComponent, canActivate: [WordGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
