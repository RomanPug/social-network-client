import {AuthComponent} from "./components/auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TestComponent} from "./components/test/test.component";

const appRouts: Routes = [
  {path: '', component: AuthComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
