import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() public question = '';
  public userAnswer = '';
  @Output() private submitted = new EventEmitter<string>();

  constructor() {}

  public onSubmit() {
    if (this.userAnswer !== '') {
      this.submitted.emit(this.userAnswer);
    }
  }
}
