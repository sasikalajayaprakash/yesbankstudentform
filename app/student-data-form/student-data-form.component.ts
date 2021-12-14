import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { DatasharingService } from "../services/datasharing.service";

@Component({
  selector: "app-student-data-form",
  templateUrl: "./student-data.component.html",
  styleUrls: ["./student-data-form.component.scss"],
})
export class StudentDataFormComponent {
  userModal = new User();
  public studentGroup: Array<any> = [
    "Maths",
    "Biology",
    "History",
    "Accounts",
    "Computer Science",
  ];
  public status: Array<any> = ["Active", "Inactive"];
  @ViewChild('fileInput') el: ElementRef;

  constructor(public router: Router, public dataShare: DatasharingService) {}

  // Prevent paste action in form fields
  @HostListener("paste", ["$event"]) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
  // Prevent developer tool open in application
  @HostListener("contextmenu", ["$event"])
  onRightClick(event) {
    event.preventDefault();
  }
  // Student Form submit
  onSubmit() {
    this.dataShare.setStudentData(this.userModal);
    this.router.navigate(["/show"]);
  }
  // Prevent numbers to accept other number type values
  preventExceptNumbers(evt) {
    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }
  }
  // Save image file values to userModel
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file;
    if (event.target.files && event.target.files.length > 0) {
      file = event.target.files[0];
    }
    this.userModal.photo = file;
  }
}
