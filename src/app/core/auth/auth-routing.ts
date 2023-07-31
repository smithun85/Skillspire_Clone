import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes:Routes=[
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'forget-password',
        component:ForgetPasswordComponent
    },
    {
        path:'reset-password',
        component:ResetPasswordComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class authRoutingModule {}