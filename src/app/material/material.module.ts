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
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonToggleModule
} from '@angular/material';

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatCardModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatRadioModule,
    ]
})
export class MaterialModule {
}
