import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  static studentData: any;
  constructor() { }

  setStudentData(data) {
    DatasharingService.studentData = data;
  }
  getStudentdata() {
    return DatasharingService.studentData;
  }
}
