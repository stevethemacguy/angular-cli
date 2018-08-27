// Import other modules with the components, directives, and pipes needed by the components in THIS module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Shared Components
import { LojchartDirective } from './charts/lojchart.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { BaseDropDownComponent } from './form-inputs/base-drop-down/base-drop-down.component';
import { BaseModalComponent } from './overlays/modals/base-modal/base-modal.component';
import { BasePanelComponent } from './layout/base-panel/base-panel.component';
import { UserAvatarComponent } from './widgets/user-avatar/user-avatar.component';
import { ToolTipComponent } from './overlays/tool-tip/tool-tip.component';
import { TextDropDownComponent } from './form-inputs/text-drop-down/text-drop-down.component';
import { RowPanelComponent } from './layout/row-panel/row-panel.component';
import { ProgressBarComponent } from './widgets/progress-bar/progress-bar.component';
import { PopOverComponent } from './overlays/pop-over/pop-over.component';
import { InviteActionComponent } from './menu-actions/invite-action/invite-action.component';
import { ImageResizerComponent } from './widgets/image-resizer/image-resizer.component';
import { HistoryActionComponent } from './menu-actions/history-action/history-action.component';
import { FilterActionComponent } from './menu-actions/filter-action/filter-action.component';
import { FavoritesStarActionComponent } from './menu-actions/favorites-star-action/favorites-star-action.component';
import { ExportActionComponent } from './menu-actions/export-action/export-action.component';
import { EmailActionComponent } from './menu-actions/email-action/email-action.component';
import { CustomDropDownComponent } from './form-inputs/custom-drop-down/custom-drop-down.component';
import { CurrencyInputComponent } from './form-inputs/currency-input/currency-input.component';
import { ChartPanelComponent } from './charts/chart-panel/chart-panel.component';
import { ChartComponent } from './charts/chart/chart.component';

@NgModule({
  // Importing a module makes all of its public components, directives, and pipes visible to the component templates in THIS module
  imports: [
    CommonModule,
    FormsModule
  ],
  // Only Components, Pipes, and Directives created in the shared folder should be declared in this array
  // If the Component is a singleton that is instantiated only once, move it to the Core Module intead.
  declarations: [
    BaseDropDownComponent,
    BaseModalComponent,
    BasePanelComponent,
    ChartComponent,
    ChartPanelComponent,
    CurrencyInputComponent,
    CustomDropDownComponent,
    EmailActionComponent,
    ExportActionComponent,
    FavoritesStarActionComponent,
    FilterActionComponent,
    HistoryActionComponent,
    ImageResizerComponent,
    InviteActionComponent,
    PopOverComponent,
    ProgressBarComponent,
    RowPanelComponent,
    TextDropDownComponent,
    ToolTipComponent,
    UserAvatarComponent,
    LojchartDirective,
    FilterPipe
  ],
  // Make components public so that other component templates can use them
  exports: [
    CommonModule,
    FormsModule,
    BaseDropDownComponent,
    BaseModalComponent,
    BasePanelComponent,
    ChartComponent,
    ChartPanelComponent,
    CurrencyInputComponent,
    CustomDropDownComponent,
    EmailActionComponent,
    ExportActionComponent,
    FavoritesStarActionComponent,
    FilterActionComponent,
    HistoryActionComponent,
    ImageResizerComponent,
    InviteActionComponent,
    PopOverComponent,
    ProgressBarComponent,
    RowPanelComponent,
    TextDropDownComponent,
    ToolTipComponent,
    UserAvatarComponent
  ]
})
export class SharedModule {
}
