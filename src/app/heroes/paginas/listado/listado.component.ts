import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  pageSize= 1;
  desde: number = 0;
  hasta: number = 1;

  constructor(private heroesService: HeroesService) { }



  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe({
      next:(heroes) => this.heroes = heroes
    })
  }

  cambiarpagina(e:PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }


}
