import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarHeaderComponent } from './side-bar-header/side-bar-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // "Singleton" components that are instantiated in the app once and may have a singleton service.
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    SideBarHeaderComponent,
  ]
})
export class CoreModule { }
