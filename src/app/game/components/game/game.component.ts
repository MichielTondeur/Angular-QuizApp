import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../interfaces/question';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  public question: Question = {
    id: 1,
    question: '',
    answer: '',
    category: '',
  };
  public submitted = false;
  public userAnswer = '';
  public streak = 0;

  private colors = [
    { category: 'History', color: 'yellow' },
    { category: 'Sports & Leisure', color: 'Orange' },
    { category: 'Geography', color: 'blue' },
    { category: 'Entertainment', color: 'hotpink' },
    { category: 'Arts & Literature', color: 'purple' },
    { category: 'Science & Nature', color: 'green' },
  ];

  private subscription!: Subscription;

  constructor(private questionservice: QuestionService) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getQuestion() {
    this.subscription = this.questionservice
      .getQuestion()
      .subscribe((question) => (this.question = question));
  }

  public onSubmitted(answer: string) {
    this.userAnswer = answer;
    this.submitted = true;
  }

  public onNext(result: boolean) {
    this.userAnswer = '';
    this.submitted = false;
    this.getQuestion();
    this.streak = result ? this.streak + 1 : 0;
  }

  public getColor(category: string) {
    const item = this.colors.filter((color) => color.category === category);
    if (item.length > 0) {
      return item[0].color;
    }
    return 'white';
  }
}
