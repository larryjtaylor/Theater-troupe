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

  addActor(newActor: Actor) {
    this.actors.push(newActor);
  }

  getActorById(actorId: string){
    return this.database.object('actors/' + actorId);
  }
}
