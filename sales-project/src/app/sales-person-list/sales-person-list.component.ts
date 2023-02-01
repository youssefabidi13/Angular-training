import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
   //create an array of objects
   salesPersonList: SalesPerson[] = [
    new SalesPerson("Youssef","Abidi","youssef.abidi@etu.uae.ac.ma",10000),
    new SalesPerson("Ucef","Abidi","youssefabidi929@gmail.com",20000),
    new SalesPerson("Leo","Messi","Leo@Messi.com",10000),
    new SalesPerson("Youssef","ucef","Ucefabidi.etu.uae.ac.ma",10000),
   ];
}
