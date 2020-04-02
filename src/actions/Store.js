import { BehaviorSubject } from 'rxjs';

export const score$ = new BehaviorSubject(
  JSON.parse(localStorage.getItem('score'))
);

export function updateScore(score) {
  if (score) {
    score$.next(score);
    localStorage.setItem('score', JSON.stringify(score));
  } else {
    score$.next(score);
    localStorage.removeItem('score');
  }
}
