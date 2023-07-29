import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabOptionsComponent } from './tab-options/tab-options.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';



@NgModule({
  declarations: [
    TabOptionsComponent,
    NavigationBarComponent,
    PageHeadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabOptionsComponent,
    NavigationBarComponent,
    PageHeadingComponent
  ]
})
export class SharedModule { }
