import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PowerComponent } from './components/power/power.component';
import { FormsModule } from '@angular/forms';
import { TemperatureTopComponent } from './components/temperature-top/temperature-top.component';
import { UsersRightComponent } from './components/users-right/users-right.component';
import { DevicesComponent } from './components/devices/devices.component';
import { TvComponent } from './components/tv/tv.component';
import { SkyComponent } from './components/sky/sky.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { More1Component } from './components/more1/more1.component';
import { More2Component } from './components/more2/more2.component';
import { AppleTvComponent } from './components/apple-tv/apple-tv.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './components/swiper/swiper.component';
import { JsonComponent } from './components/json/json.component';
import { Json2Component } from './components/json2/json2.component';
import { Json3Component } from './components/json3/json3.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DevicesDetailsComponent } from './components/devices-details/devices-details.component';
import { DialPadComponent } from './components/devices-details/components/dial-pad/dial-pad.component';
import { TestComponent } from './components/devices-details/components/test/test.component';
import { DialComponent } from './components/devices-details/components/dial-pad/dial/dial.component';
import { ColorBtnComponent } from './components/sky/components/color-btn/color-btn.component';
import { ColorDirective } from './components/sky/components/color-btn/color.directive';
import { SkyDialComponent } from './components/sky/components/sky-dial/sky-dial.component';
import { BtnDirective } from './components/sky/components/sky-dial/btn.directive';
import { ChUpComponent } from './components/sky/components/d-pad/ch-up/ch-up.component';
import { ChDownComponent } from './components/sky/components/d-pad/ch-down/ch-down.component';
import { HomeBtnComponent } from './components/sky/components/d-pad/home-btn/home-btn.component';
import { BackUpComponent } from './components/sky/components/d-pad/back-up/back-up.component';
import { ResetComponent } from './components/sky/components/d-pad/reset/reset.component';
import { SearchComponent } from './components/sky/components/search/search.component';
import { DPadTestComponent } from './components/d-pad-test/d-pad-test.component';

const appRoute: Routes = [
  { path: 'details', component: DevicesDetailsComponent },
  { path: 'details/detail/:id', component: DevicesDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    TemperatureTopComponent,
    UsersRightComponent,
    DevicesComponent,
    TvComponent,
    SkyComponent,
    BathroomComponent,
    More1Component,
    More2Component,
    AppleTvComponent,
    SwiperComponent,
    JsonComponent,
    Json2Component,
    Json3Component,
    RoomListComponent,
    DevicesDetailsComponent,
    DialPadComponent,
    TestComponent,
    DialComponent,
    ColorBtnComponent,
    ColorDirective,
    SkyDialComponent,
    BtnDirective,
    ChUpComponent,
    ChDownComponent,
    HomeBtnComponent,
    BackUpComponent,
    ResetComponent,
    SearchComponent,
    DPadTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwiperModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
