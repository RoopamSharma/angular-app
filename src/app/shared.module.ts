import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorChanger } from "./shared/colorchanger.directive";
import { DescriptionPipe } from './shared/description.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
@NgModule({
  declarations: [
    DescriptionPipe,
    ColorChanger,
    DropdownDirective
  ],
  exports: [
    DescriptionPipe,
    ColorChanger,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers:[ 
    
  ],
  bootstrap: []
})
export class SharedModule {}
