import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tablehead=['# ', 'Name' , 'Username','phone','#']
  btn=['details','delete','update']
people =[
  { number:'',
    name :'',
    username:'',
    phone:''
  },
  
] ;
people1:any[]=[];
addtable(){
this.people1.push(this.people);
this.people =[
  {  number:'',
    name :'',
   username:'',
   phone:'',
  },
];
};
formData = {  number:'',
name :'',
username:'',
phone:'',};
  tableData: Array<{ number: string, name: string ,username: string, phone: string}> = [];

  addData() {
    
      this.tableData.push(this.formData );
      
    }
  }


