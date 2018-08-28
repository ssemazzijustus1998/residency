import { Component, OnInit } from '@angular/core';

///-----------------------------------------------separating local impoet from built in import

import {EmployeeService} from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
   providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private EmployeeService:EmployeeService) { }

  ngOnInit() {
  }

}
