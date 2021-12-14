import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DatasharingService } from "../services/datasharing.service";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.scss"],
})
export class ShowComponent implements OnInit {
  public stuData: any;
  public imageUrl: any = "../../assets/profileimage.jpeg";
  constructor(public router: Router, public dataShare: DatasharingService) {}

  ngOnInit(): void {
    this.stuData = this.dataShare.getStudentdata();
    if (!this.stuData) {
      this.router.navigate(['/data']);
    }
    if (this.stuData?.photo) {
      let reader = new FileReader();
      let file = this.stuData.photo;
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
}
