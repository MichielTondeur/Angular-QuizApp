import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';

import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [AppComponent, MainComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
