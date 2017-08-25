import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor.model';
import { Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
  providers: [ActorService]
})
export class ActorsComponent implements OnInit {
  actors: FirebaseListObservable<any[]>;

  constructor(private router: Router, private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getActors();
  }

  goToDetailPage(clickedActor) {
    this.router.navigate(['actors', clickedActor.$key]);
   };
}
