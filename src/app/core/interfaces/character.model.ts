import { Item } from "./item.model";

export interface Character {
    comics: Generic;
    description: string;
    events: Generic;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: Generic;
    stories: Generic;
    thumbnail: Thumbnail;
    urls: Url[];
}

export interface Thumbnail {
    extension: string;
    path: string;
}

export interface Generic {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Url {
    type: string;
    url: string;
}
