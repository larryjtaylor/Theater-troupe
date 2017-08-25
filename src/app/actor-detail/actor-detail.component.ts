import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
  providers: [ActorService]

})
export class ActorDetailComponent implements OnInit {
  actorId: string;
  actorToDisplay: Actor;

  constructor(private route: ActivatedRoute, private location: Location, private actorService: ActorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.actorId = urlParameters['id'];
    });
    this.actorToDisplay = this.actorService.getActorById(this.actorId);
  }
}
