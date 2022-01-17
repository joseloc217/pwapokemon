import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/detail';
import { ListsService } from 'src/app/services/lists.service';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  list: Detail;
  
  constructor(
    private listsService: ListsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
 
   const  identifier = this.activatedRoute.snapshot.paramMap.get('id')
    this.listsService.getListById(identifier).subscribe((list) =>{
      if(!list){
        return this.router.navigateByUrl('/')
      }
      this.list = list;
    })
  }

}
