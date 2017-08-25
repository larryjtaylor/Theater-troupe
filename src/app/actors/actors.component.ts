import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor.model';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[] = [
    new Actor("Shelley Duvall", "395-862-0844", "1423 NE Chester Dr., Malibu, CA 90213", "heresjohnny@yahoo.com", "soprano"),
    new Actor("Mike Keaton", "842-504-5062", "8394 SW Waterloo Ave., Culver City, CA 90223", "noimbatman@gmail.com", "baritone"),
    new Actor("Whoopie Goldberg", "394-802-3405"," 42843 NW Richington Blvd., Beverly Hills, CA 90210", "suckmyegot@gmail.com", "alto"),
    new Actor("David Schwimmer", "340-382-9854", "2453 SW Oak st., Apt 4G, Ventura, CA 92849", "pivooottt@msn.com", "tenor")
  ];
  constructor() { }

  ngOnInit() {
  }

}
