import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  question: Question;
  submitted: boolean;
  userAnswer: string;

  constructor(private questionservice: QuestionService) {
    this.question = {
      id: 1,
      question: '',
      answer: '',
      category: '',
    };
    this.submitted = false;
    this.userAnswer = '';
  }

  ngOnInit(): void {
    this.question = this.questionservice.getQuestion();
  }

  onSubmitted(answer: string) {
    this.userAnswer = answer;
    this.submitted = true;
  }

  onNext() {
    this.userAnswer = '';
    this.submitted = false;
    this.question = this.questionservice.getQuestion();
  }
}
