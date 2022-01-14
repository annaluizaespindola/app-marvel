import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/core/services/image.service';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { Character } from '../../core/interfaces/character.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  character!: Character;
  avatar = '';

  constructor(private route: ActivatedRoute,
    private marvelService: MarvelService,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCharacter().then(() => { });
  }

  async getCharacter() {
    this.route.params.subscribe(async (params) => {
      try {
        const character = await this.marvelService.getCharacter(params.id).toPromise() as any;
        this.character = character.data.results[0] as Character;
        this.avatar = this.getAvatar();
      } catch (e) {
        console.error('ERROR details.component.ts on action getCharacter(): ', e);
      }
    });
  }

  getAvatar() {
    return this.imageService.getImage('standard_medium', this.character.thumbnail);
  }

}
