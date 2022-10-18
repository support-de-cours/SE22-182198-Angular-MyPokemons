import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId'
})
export class PokemonIdPipe implements PipeTransform {

  transform(pokemonUrl: string): number {

    let parts = pokemonUrl.split('/');
    let id = parseInt(parts.slice(-2)[0]);

    return id;
  }

}
