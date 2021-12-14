import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { StudentDataFormComponent } from "./student-data-form/student-data-form.component";
import { ShowComponent } from "./show/show.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentDataFormComponent,
    ShowComponent,
    PagenotfoundComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: "", component: StudentDataFormComponent },
        { path: "data", component: StudentDataFormComponent },
        {
          path: "show",
          component: ShowComponent
        },

        {
          path: "pagenotfound",
          component: PagenotfoundComponent,
        },
        {
          path: "**",
          pathMatch: "prefix",
          redirectTo: "pagenotfound",
        },
      ],
      { relativeLinkResolution: "legacy" }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
