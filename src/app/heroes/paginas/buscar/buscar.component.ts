import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  heroeSelect: Heroe | undefined;
  heroes: Heroe[] = [];
  termino:string = '';
  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.heroeService.busquedaHeroe(this.termino)
    .subscribe(heroes => this.heroes = heroes)
  }

  elementoSelect(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSelect = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroeService.getHeroeByid(heroe.id!)
    .subscribe(heroe => this.heroeSelect = heroe)

  }

}
