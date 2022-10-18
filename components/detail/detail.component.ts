import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemonId: number = 0;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void 
  {
    let _id = this._route.snapshot.paramMap.get('id') ?? '0';
    let id = parseInt(_id);

    // ---- 
    // Appel de la methode premettant de recup les données du pokemon
    // Envois des données à la vue
    // ----
    console.log( id );
  }

}
