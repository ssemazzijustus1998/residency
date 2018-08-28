import { Injectable } from '@angular/core';
//adding import statements for angular packages and rxjs
import{ HttpClient} from  '@angular/common/http';
import{ Observable} from  'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//added import staement for the employee module contained in employee.models.ts
import{ Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  constructor() { }
}
