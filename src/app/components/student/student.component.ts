import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studentName: string = '';
  studentAge: string = '';
  // array of objects
  students: any = [];
  addStudent() {
    if (this.studentName.length > 3 && Number(this.studentAge) > 18) {
      this.students.push({
        name: this.studentName,
        age: this.studentAge,
      });
      this.studentName = '';
      this.studentAge = '';
    }
  }
}
