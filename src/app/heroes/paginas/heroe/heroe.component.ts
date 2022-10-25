import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  id!: string;
  heroe!: Heroe;

  constructor(private activedRoute: ActivatedRoute,
    private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap (({id}) => this.heroesService.getHeroeByid(id))
    )
      .subscribe(heroe => this.heroe = heroe);
    
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
