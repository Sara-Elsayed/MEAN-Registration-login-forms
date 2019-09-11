import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from "../../helpers/must-match.validator";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        userName: ["", [Validators.required, Validators.minLength(6)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    this.userService.postUser(this.registerForm.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => (this.showSucessMessage = false), 4000);
        this.resetForm(this.registerForm);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("<br/>");
        } else
          this.serverErrorMessages =
            "Something went wrong.Please contact admin.";
      }
    );
  }
  resetForm(form: FormGroup) {
    this.userService.selectedUser = {
      userName: "",
      email: "",
      password: ""
    };
    form.value.resetForm();
    this.serverErrorMessages = "";
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
