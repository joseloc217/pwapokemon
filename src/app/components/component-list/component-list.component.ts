import { Component, OnInit, ViewChild } from '@angular/core';
import { Detail } from 'src/app/models/detail';
import { ListsService } from 'src/app/services/lists.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  lists: Detail[] =[];
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private listsService: ListsService, private router: Router) {}

  ngOnInit(): void {
    this.getPokes (); 
    }
    getPokes() {
      let apiData;
      for (let i = 1; i <= 120; i++) {
        this.listsService.getListById(i).subscribe(
          response => {
            apiData = {
              position: i,
              image: response.sprites.front_default,
              name: response.name
            };
            this.data.push(apiData);
            this.dataSource = new MatTableDataSource<any>(this.data);
            this.dataSource.paginator = this.paginator;
          },
          err => {
            console.log(err);
          }
        );
      }
    }
    getRow(row: { position: any; }){
    this.router.navigateByUrl(`/detail/${row.position}`)
}
}
