import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ActorService]
})
export class AdminComponent implements OnInit {

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }

  submitForm(name: string, phone: string, address: string, email: string, range:string, image: string) {
      var newActor: Actor = new Actor(name, phone, address, email, range, image);
      this.actorService.addActor(newActor);

    }
}
