import { Injectable } from '@angular/core';
import { Thumbnail } from '../interfaces/character.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

}
