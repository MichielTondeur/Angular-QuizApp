import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public question: Question = {
    id: 1,
    question: '',
    answer: '',
    category: '',
  };
  public submitted = false;
  public userAnswer = '';
  public streak = 0;

  constructor(private questionservice: QuestionService) {}

  ngOnInit(): void {
    this.question = this.questionservice.getQuestion();
  }

  public onSubmitted(answer: string) {
    this.userAnswer = answer;
    this.submitted = true;
  }

  public onNext(result: boolean) {
    this.userAnswer = '';
    this.submitted = false;
    this.question = this.questionservice.getQuestion();
    this.streak = result ? this.streak + 1 : 0;
  }
}
