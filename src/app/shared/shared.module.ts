import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CashmereModule } from "../cashmere/cashmere.module";
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, CashmereModule, FormsModule],
  exports: [InputComponent]
})
export class SharedModule {}
