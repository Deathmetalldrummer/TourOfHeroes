import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes: Hero[] = [
      {id: 1, name: 'name 1'},
      {id: 2, name: 'name 2'},
      {id: 3, name: 'name 3'},
      {id: 4, name: 'name 4'},
      {id: 5, name: 'name 5'},
      {id: 6, name: 'name 6'},
      {id: 7, name: 'name 7'},
      {id: 8, name: 'name 8'},
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
