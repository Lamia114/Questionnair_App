import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  {path:'',component:SelectComponent},
  {path:'question/:id',component:QuestionComponent},
  {path:'result',component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
