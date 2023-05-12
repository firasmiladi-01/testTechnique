import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigSideBarComponent } from './config-side-bar/config-side-bar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSectionComponentComponent } from './main-section-component/main-section-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiUsersService } from './services/api-users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfigSideBarComponent,
    UserCardComponent,
    MainSectionComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
