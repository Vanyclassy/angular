import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../forms/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formService: FormService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('',
        [this.userPasswordValidator, Validators.required])
    });
  }

  ngOnInit(): void {
  }

  userPasswordValidator(password: FormControl): any {
    const RegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;
    if (!RegExp.test(password.value)) {
      return {password: true};

    } else {
      return null;
    }
  }

  submitForm(): void {
    this.formService.setUserData({email: this.form.value.email, password: this.form.value.password});
  }

}
