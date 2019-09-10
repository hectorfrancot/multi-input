import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Input component consumer";
  targets = [false, 1, "text", new Date()];
  myForm: FormGroup;

  /**
   * Adding the form builder service with dependency injection.
   * @param formBuilder angular service to create a form group.
   */
  constructor(private formBuilder: FormBuilder) {}

  /**
   * Ones the component is created then we create the form group.
   */
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      number: new FormControl("", [Validators.required]),
      text: new FormControl("", [Validators.required]),
      checkbox: new FormControl(false, [Validators.required]),
      date: new FormControl(new Date(), [Validators.required])
    });
  }

  /**
   * Do something with the form.
   */
  submit() {}
}
