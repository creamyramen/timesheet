import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateEmployeeHours(employee: Employee) {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFirestore) { }
  saveEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').add(employee);
}
}
