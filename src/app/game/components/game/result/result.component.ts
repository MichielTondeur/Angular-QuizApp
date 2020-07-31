import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() answer: string;
  @Input() userAnswer: string;
  result: boolean;
  @Output() next = new EventEmitter();

  constructor() {
    this.answer = '';
    this.userAnswer = '';
    this.result = false;
  }

  ngOnInit(): void {
    this.result = this.checkAnswer(this.answer, this.userAnswer);
  }

  onNextQuestion() {
    this.next.emit(this.result);
  }

  trimWhiteSpace = (answer: string): string => {
    return answer.trim();
  };

  replaceSpecialChars = (answer: string): string => {
    return answer.replace(/[^a-zA-Z0-9]+/gi, '');
  };

  replaceAccentedChars = (answer: string): string => {
    return answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  setToLowerCase = (answer: string): string => {
    return answer.toLowerCase();
  };

  normalizeAnswer = (answer: string): string => {
    return this.replaceSpecialChars(
      this.replaceAccentedChars(
        this.setToLowerCase(this.trimWhiteSpace(answer))
      )
    );
  };

  checkAnswer = (answer: string, inputAnswer: string): boolean => {
    return this.normalizeAnswer(answer) === this.normalizeAnswer(inputAnswer);
  };
}
