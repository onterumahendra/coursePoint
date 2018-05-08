import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {
  
  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    console.log(this.loginForm.value);
  }
}
