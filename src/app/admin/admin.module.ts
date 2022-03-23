import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: AdminLayoutComponent
    //   }
    // ])
  ]
})
export class AdminModule {}