import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropDownsModule,
    DropDownButtonModule,
    RouterModule.forRoot(
      [
        {
          path: 'test',
          loadChildren: () =>
            import('test/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '**',
          redirectTo: 'test',
          pathMatch: 'full'
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
