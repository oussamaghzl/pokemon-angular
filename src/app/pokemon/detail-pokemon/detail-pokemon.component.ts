import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon : Pokemon|undefined;

  constructor (
    private route: ActivatedRoute, 
    private router: Router,
    private PokemonService: PokemonService
  ) {  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon : Pokemon) {
    this.router.navigate(['/edit/pokemon/', pokemon.id]);
  }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    
    if (pokemonId) {
      this.pokemon = this.PokemonService.getPokemonById(+pokemonId)
    }
  }
}
