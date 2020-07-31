import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { QUESTIONS } from './mock-questions';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestion(): Observable<Question> {
    return of(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);
  }
}
