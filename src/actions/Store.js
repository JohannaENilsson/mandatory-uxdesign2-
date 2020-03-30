import { BehaviorSubject } from 'rxjs';

export const score$ = new BehaviorSubject(localStorage.getItem('score'));

export function updateScore(score) {
  score$.next(score);
  localStorage.setItem('score', score);
}
