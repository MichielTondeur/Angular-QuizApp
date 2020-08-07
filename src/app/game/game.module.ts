import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { GameComponent } from './components/game/game.component';
import { QuestionComponent } from './components/game/components/question/question.component';
import { ResultComponent } from './components/game/components/result/result.component';

import { QuestionService } from './services/question.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameComponent, QuestionComponent, ResultComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [QuestionService],
})
export class GameModule {}
