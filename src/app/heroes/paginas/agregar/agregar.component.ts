import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { MY_FORM_MODEL } from './agregar.constants';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup = this.formService.createFormGroup(this.formModel);
id!: string;
  constructor(private formService: DynamicFormService,
    private heroService: HeroesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRouter.params
        .pipe(
          switchMap(({ id }) => {
            console.log('00000000000____');
            console.log(id);
            return this.heroService.getHeroeByid(id)})
          )
            .subscribe(heroe =>{
              const {id,...otro} = heroe;
              this.id = id || '';
               this.formGroup.setValue(otro)});
    }
  }

  guardar() {
    console.log(this.formGroup.value)
  }

}
