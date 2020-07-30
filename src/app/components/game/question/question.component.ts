import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: string;
  @Output() submitted = new EventEmitter<string>();
  userAnswer: string;

  constructor() {
    this.question = '';
    this.userAnswer = '';
  }

  onSubmit() {
    if (this.userAnswer !== '') {
      this.submitted.emit(this.userAnswer);
    }
  }
}
