import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabOptionsComponent } from "./tab-options/tab-options.component";


@NgModule({
  declarations: [TabOptionsComponent],
  imports: [CommonModule],
  exports: [TabOptionsComponent]
})
export class SharedModule {}