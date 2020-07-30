import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';

import { QuestionService } from './services/question.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './components/game/question/question.component';
import { ResultComponent } from './components/game/result/result.component';

@NgModule({
  declarations: [AppComponent, MainComponent, GameComponent, QuestionComponent, ResultComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
