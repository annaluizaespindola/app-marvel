import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Character } from '../core/interfaces/character.model';
import { MarvelService } from '../core/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters = [] as Character[];
  dataSource: any;

  displayedColumns = [
    'id',
    'name',
    'thumbnail',
    'series',
    'modified'
  ];

  sortList: any;
  filterTable = '';

  skip = 0;
  limit = 10;
  count = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private marvelService: MarvelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCharacters().then(() => { });
  }

  async getCharacters() {
    try {
      const characters = await this.marvelService.getCharacters(this.limit, this.skip).toPromise() as any;
      this.characters = characters.data.results as Character[];
      this.count = characters.data.total;
      this.initTable();
    } catch (e) {
      console.error('ERROR characters.component.ts on action getCharacters(): ', e);
    }
  }

  initTable() {
    this.dataSource = new MatTableDataSource(this.characters);
    this.dataSource.sortingDataAccessor = (item: any, property: any) => {
      switch (property) {
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  getPage(e: PageEvent) {
    this.skip = e.pageIndex * e.pageSize;
    this.limit = e.pageSize;
    this.getCharacters().then(() => {});
  }

  returnSeries(series: any) {
    const result = series.map((serie: any) => {
      return serie.name;
    }).join('\r\n') as string;
    return result;
  }

  redirectTo(id: string) {
    this.router.navigateByUrl(`details/${id}`);
  }
}
