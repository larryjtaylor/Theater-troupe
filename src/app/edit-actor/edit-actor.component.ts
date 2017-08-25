import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
  providers: [ActorService]
})

export class EditActorComponent implements OnInit {
  @Input() selectedActor;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }
  beginUpdatingActor(actorToUpdate){
    this.actorService.updateActor(actorToUpdate);
  }

  beginDeletingActor(actorToDelete){
    if(confirm("Are you sure you want to delete this actor from the repertory?")){
      this.actorService.deleteActor(actorToDelete);
    }
  }
}
