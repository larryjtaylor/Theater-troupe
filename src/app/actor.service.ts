import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { ACTORS } from './mock-actors';

@Injectable()
export class ActorService {

  constructor() { }

  getActors() {
      return ACTORS;
    }

  getActorById(actorId: number){
    for (var i = 0; i <= ACTORS.length - 1; i++) {
      if (ACTORS[i].id === actorId) {
        return ACTORS[i];
      }
    }
  }
}
