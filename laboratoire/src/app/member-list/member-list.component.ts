import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin','name', 'createDate','cv', 'type'];
 dataSource:any[]=[
    {
     id:'12345',
     cin:'11669920',
     name:'Membre 1',
     createDate:'2020-10',
     cv:'lien',
     type:'Teacher' 
    },
    { id:'65488',
    cin:'66903321',
    name:'Membre 2',
    createDate:'2020-10',
    cv:'lien',
    type:'Teacher' 
   },{ id:'00001',
   cin:'20639859',
   name:'Membre 3',
   createDate:'2020-10',
   cv:'lien',
   type:'Student' 
  }
 ]
  
  constructor() { }


  ngOnInit(): void {
  }

}
