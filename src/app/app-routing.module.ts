import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './components/test/test.component';
import {FormPageComponent} from './components/form-page/form-page.component';


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'form-page', component: FormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
