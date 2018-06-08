import {AuthComponent} from "./components/auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const appRouts: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
