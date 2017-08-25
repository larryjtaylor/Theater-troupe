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

  updateActor(localUpdatedActor){
    var actorEntryInFirebase = this.getActorById(localUpdatedActor.$key);
    actorEntryInFirebase.update({name: localUpdatedActor.name,
                                phone: localUpdatedActor.phone,
                                address: localUpdatedActor.address,
                                email: localUpdatedActor.email,
                                range: localUpdatedActor.range,
                                image: localUpdatedActor.image});
  }
}
