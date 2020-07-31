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
  streak: number;

  constructor(private questionservice: QuestionService) {
    this.question = {
      id: 1,
      question: '',
      answer: '',
      category: '',
    };
    this.submitted = false;
    this.userAnswer = '';
    this.streak = 0;
  }

  ngOnInit(): void {
    this.question = this.questionservice.getQuestion();
  }

  onSubmitted(answer: string) {
    this.userAnswer = answer;
    this.submitted = true;
  }

  onNext(result: boolean) {
    this.userAnswer = '';
    this.submitted = false;
    this.question = this.questionservice.getQuestion();
    this.streak = result ? this.streak + 1 : 0;
  }
}
