import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
  ]
})
export class MaterialModule {
}
