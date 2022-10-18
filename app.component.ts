import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './service/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private _service: PokeapiService
  ) {}

  ngOnInit(): void 
  {
    this._service.getHttpList();
  }
}
