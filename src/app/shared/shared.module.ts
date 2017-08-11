// Import other modules with the components, directives, and pipes needed by the components in THIS module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasePanelComponent } from 'shared/layout/base-panel/base-panel.component';


@NgModule({
  // Importing a module makes all of its public components, directives, and pipes visible to the component templates in THIS module
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BasePanelComponent
  ],
  // Make some of those classes public so that other component templates can use them
  exports: [
    BasePanelComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
