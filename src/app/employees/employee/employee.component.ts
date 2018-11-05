import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'; 
import{EmployeeService} from '../shared/employee.service';
import {ToastrService} from'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }
  stats=['Approval','Approved','Declined','Pending','Researching'];
  statis=['Average','Good','Achieving','Outstanding'];

  ngOnInit() {
    this.resetForm();
  }
onSubmit(employeeForm:NgForm)
{
this.employeeService.insertEmployee(this.employeeService.seletedEmployee);
this.resetForm(employeeForm);
this.toastr.success('Submitted Successfully','Employee Register');
}
resetForm(employeeForm?:NgForm)
{
  
  if(employeeForm!=null)
  employeeForm.reset();
  this.employeeService.seletedEmployee={
    $key:null,
    CompanyName:'',
    KeyContacts:'',
    CurrentStatus:'',
    FinancialPerformance:''
    }
}
}



