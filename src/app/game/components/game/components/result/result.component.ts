import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() public answer = '';
  @Input() public userAnswer = '';
  public result = false;
  @Output() private next = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.result = this.checkAnswer(this.answer, this.userAnswer);
  }

  public onNextQuestion(): void {
    this.next.emit(this.result);
  }

  private trimWhiteSpace = (answer: string): string => {
    return answer.trim();
  };

  private replaceSpecialChars = (answer: string): string => {
    return answer.replace(/[^a-zA-Z0-9]+/gi, '');
  };

  private replaceAccentedChars = (answer: string): string => {
    return answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  private setToLowerCase = (answer: string): string => {
    return answer.toLowerCase();
  };

  private normalizeAnswer = (answer: string): string => {
    return this.replaceSpecialChars(
      this.replaceAccentedChars(
        this.setToLowerCase(this.trimWhiteSpace(answer))
      )
    );
  };

  private checkAnswer = (answer: string, inputAnswer: string): boolean => {
    return this.normalizeAnswer(answer) === this.normalizeAnswer(inputAnswer);
  };
}
