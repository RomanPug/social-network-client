import {AuthComponent} from "./components/auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { UserPageComponent } from "./components/user-page/user-page.component";

const appRouts: Routes = [
  {path: '', component: AuthComponent},
  {path: 'user', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
