import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WordService } from './services/word.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './components/word/word.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { HangComponent } from './components/hang/hang.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component'
import { WordGuard } from './guards/word.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    HangComponent,
    DialogComponent,
    FooterComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
 
  ],
  providers: [WordService,DialogComponent, WordGuard],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
