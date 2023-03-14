import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CounterComponent } from './components/counter/counter.component';
import { SliderComponent } from './components/slider/slider.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { FooterComponent } from './components/myFooter/footer.component';
import { ItiTracksComponent } from './components/iti-tracks/iti-tracks.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentComponent,
    NavbarComponent,
    CounterComponent,
    SliderComponent,
    GallaryComponent,
    FooterComponent,
    ItiTracksComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
