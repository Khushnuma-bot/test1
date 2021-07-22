import { Component } from '@angular/core';
import {ExcelService} from './excel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any = [{
    S_id: '101',
    S_name: 'Manasi',
    S_roll: 1,
    age:20
    },{
    S_id: '102',
    S_name: 'khusnuma',
    S_roll: 2,
    age:20
    },{
    S_id: '103',
    S_name: 'Snehal',
    S_roll: 3,
    age:20
    },
    {
      S_id:'104',
      S_name:'jyoti',
      S_roll:4,
      age:21
    },
    {
      S_id:'105',
      S_name:'Ankita',
      S_roll: 5,
      age:19

    }
  ];
    constructor(private excelService:ExcelService){
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
    }
    }

