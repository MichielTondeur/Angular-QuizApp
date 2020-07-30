import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  question: Question;
  submitted: boolean;

  constructor(questionservice: QuestionService) {
    this.question = questionservice.getQuestion();
    this.submitted = false;
  }

  ngOnInit(): void {}
}
