import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Blank1Module } from './app-shell/blank-1/blank-1.module';
import { Grid1Module } from './app-shell/grid-1/grid-1.module';
import { GridModule } from './app-shell/grid/grid.module';
import { BlankModule } from './app-shell/blank/blank.module';
import { NavBarComponent } from './app-shell/nav-bar/nav-bar.component';
import { FooterComponent } from './app-shell/footer/footer.component';
import { ServiceInterceptor } from './service.interceptor';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Blank1Module,
    Grid1Module,
    GridModule,
    BlankModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
