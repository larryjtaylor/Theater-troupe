import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { ACTORS } from './mock-actors';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ActorService {
  actors: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.actors = database.list('actors');
 }

  getActors() {
      return this.actors;
    }

  getActorById(actorId: string){
    for (var i = 0; i <= ACTORS.length - 1; i++) {
      if (ACTORS[i].id === actorId) {
        return ACTORS[i];
      }
    }
  }
}
