import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  isValidName: boolean = true;
  isValidAge: boolean = true;
  studentName: string = '';
  studentAge: string = '';
  students: any = [];
  isFormValid() {
    return (
      /^[a-zA-Z]+$/.test(this.studentName) &&
      this.studentName.length > 3 &&
      Number(this.studentAge) > 18
    );
  }
  addStudent() {
    if (this.isFormValid()) {
      this.students.push({
        name: this.studentName,
        age: this.studentAge,
      });
      this.studentName = '';
      this.studentAge = '';
    }
  }
  validateName() {
    if (/^[a-zA-Z]+$/.test(this.studentName) && this.studentName.length > 3) {
      this.isValidName = true;
    } else {
      this.isValidName = false;
    }
  }
  validateAge() {
    // console.log('test');
    console.log(this.studentAge);
    if (Number(this.studentAge) > 18) {
      this.isValidAge = true;
    } else {
      this.isValidAge = false;
    }
  }
}
