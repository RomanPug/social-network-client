import {AuthComponent} from "./components/auth/auth.component";
import { RouterModule, Routes, UrlSegment } from "@angular/router";
import {NgModule} from "@angular/core";
import { UserPageComponent } from "./components/user-page/user-page.component";

const appRouts: Routes = [
  {path: '', component: AuthComponent},
  {matcher: userMatcher, component: UserPageComponent},
];

export function userMatcher(url: UrlSegment[]) {
  const regUrl = new RegExp('id([0-9]+)');
  return url[0].path.match(regUrl) ? ({consumed: url}) : null ;
}

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
