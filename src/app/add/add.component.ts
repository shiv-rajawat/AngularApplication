
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../modal/employee.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string;
  country: string;
  gender: string;
  // employeeArray: Array<IEmployee> = new Array<IEmployee>();
  employeeArray: IEmployee[] = [];
  ngOnInit() {
    const details = localStorage.getItem('employeeDetails');
    this.employeeArray = JSON.parse(details) || [];
  }

  add() {
    const employee: IEmployee = { 'name': this.name, 'country': this.country, 'gender': this.gender };
    this.employeeArray.push(employee);
    localStorage.setItem('employeeDetails', JSON.stringify(this.employeeArray));
  }


}