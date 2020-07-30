import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { QuestionComponent } from './components/game/question/question.component';
import { ResultComponent } from './components/game/result/result.component';

import { QuestionService } from '../services/question.service';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [GameComponent, QuestionComponent, ResultComponent],
  imports: [AppRoutingModule, CommonModule, FormsModule],
  providers: [QuestionService],
})
export class GameModule {}
