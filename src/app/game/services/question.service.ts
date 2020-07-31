import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestion() {
    return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  }
}
