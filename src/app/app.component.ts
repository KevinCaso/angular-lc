import { Component, VERSION } from "@angular/core";
import {
  FormControl,
  Validators,
  MinLengthValidator,
  FormBuilder,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["../styles.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  hide: any;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  //method for error in login
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  // function call on submit login form
  public submitLoginForm = loginFormValue => {
    if (this.loginForm.valid) {
      console.log("Form is Validate");
    }
  };

  register() {
    console.log("Navigate to Registration Form");
  }
}
