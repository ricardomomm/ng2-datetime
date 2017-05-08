import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NKDatetimeModule } from '../ng2-datetime/ng2-datetime.module';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, NKDatetimeModule],
    bootstrap: [AppComponent],
    declarations: [AppComponent]
})
export class AppModule {
}
