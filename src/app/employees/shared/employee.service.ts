import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList }from 'angularfire2/database';
import {Employee}from './employee.model';
@Injectable()
export class EmployeeService {
employeeList:AngularFireList<any>;
seletedEmployee:Employee=new Employee();
  constructor(private firebase : AngularFireDatabase) { }
  getData(){
  this.employeeList=this.firebase.list('employees');
return this.employeeList;
}
insertEmployee(employee:Employee)
{
  this.employeeList.push({
    CompanyName:employee.CompanyName,
    KeyContacts:employee.KeyContacts,
CurrentStatus:employee.CurrentStatus,
FinancialPerformance:employee.FinancialPerformance
  });
}

update(employee:Employee)
{
  this.employeeList.update(employee.$key,
  {
    CompanyName:employee.CompanyName,
    KeyContacts:employee.KeyContacts,
    CurrentStatus:employee.CurrentStatus,
FinancialPerformance:employee.FinancialPerformance

  });

}
deleteEmployee($key:string)
{
  this.employeeList.remove($key);
}
}
