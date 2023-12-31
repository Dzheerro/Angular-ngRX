import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducers } from "./store/reducers";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
}
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature("auth", reducers)],
  declarations: [RegisterComponent]
})
export class AuthModule {}