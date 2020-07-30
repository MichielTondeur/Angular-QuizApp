import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() answer: string;
  @Input() userAnswer: string;
  @Output() next = new EventEmitter();

  constructor() {
    this.answer = '';
    this.userAnswer = '';
  }

  ngOnInit(): void {}

  onNextQuestion() {
    this.next.emit();
  }
}
