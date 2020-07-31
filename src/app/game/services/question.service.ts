import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        id: 1,
        question: 'What year was the very first model of the iPhone released?',
        answer: '2007',
        category: 'Technology',
      },
      {
        id: 2,
        question:
          'What’s the shortcut for the “copy” function on most computers?',
        answer: 'Ctrl C',
        category: 'Technology',
      },
      {
        id: 3,
        question: 'What does “HTTP” stand for?',
        answer: 'HyperText Transfer Protocol',
        category: 'Technology',
      },
      {
        id: 4,
        question:
          'Google Chrome, Safari, Firefox and Explorer are different types of what?',
        answer: 'Web browsers',
        category: 'Technology',
      },
      {
        id: 5,
        question: 'What was Twitter’s original name?',
        answer: 'Twttr',
        category: 'Technology',
      },
      {
        id: 6,
        question: 'What is often seen as the smallest unit of memory?',
        answer: 'Kilobyte',
        category: 'Technology',
      },
      {
        id: 7,
        question:
          'In a website browser address bar, what does “www” stand for??',
        answer: 'World Wide Web',
        category: 'Technology',
      },
      {
        id: 8,
        question: 'Which Williams sister has won more Grand Slam titles?',
        answer: 'Serena',
        category: 'Sports',
      },
      {
        id: 9,
        question:
          'Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?',
        answer: 'Usain Bolt',
        category: 'Sports',
      },
      {
        id: 10,
        question: 'Who was the first woman to win a Nobel Prize (in 1903)?',
        answer: 'Marie Curie',
        category: 'Science',
      },
      {
        id: 11,
        question: 'What part of the atom has no electric charge?',
        answer: 'Neutron',
        category: 'Science',
      },
      {
        id: 12,
        question: 'Which natural disaster is measured with a Richter scale?',
        answer: 'Earthquakes',
        category: 'Science',
      },
      {
        id: 13,
        question:
          'What is the name of the thin, but long country that spans more than half of the western coast of South America?',
        answer: 'Chile',
        category: 'Geography',
      },
      {
        id: 14,
        question: 'Which American state is the largest (by area)?',
        answer: 'Alaska',
        category: 'Geography',
      },
      {
        id: 15,
        question: 'What is the name of the world’s longest river?',
        answer: 'Nile',
        category: 'Geography',
      },

      {
        id: 16,
        question:
          'What was the name of the group Justin Timberlake used to be part of?',
        answer: "N'SYNC",
        category: 'Music',
      },
      {
        id: 17,
        question:
          'Who was the lead singer of the iconic ‘80s band, Culture Club?',
        answer: 'Boy George',
        category: 'Music',
      },
      {
        id: 18,
        question: 'Which name is rapper Sean Combs better known by?',
        answer: 'P. Diddy',
        category: 'Music',
      },
      {
        id: 19,
        question: 'Which musical legend is Jay-Z married to?',
        answer: 'Beyonce',
        category: 'Music',
      },
      {
        id: 20,
        question: 'Which British girl group had a member by the name of Mel B?',
        answer: 'Spice Girls',
        category: 'Music',
      },
      {
        id: 21,
        question:
          'What was the name of the actor who played Jack Dawson in Titanic?',
        answer: 'Leonardo DiCaprio',
        category: 'Movies & TV',
      },
    ];
  }

  getQuestion() {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }
}
