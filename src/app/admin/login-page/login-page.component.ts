import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/components/interfaces';
import {AuthService} from '../../shared/service/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertComponent} from '../shared/components/alert/alert.component';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
    this.route.queryParams.subscribe((params: Params) => {
        if (params.loginFail) {
          this.message = 'Please, log in'
        }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const user: User = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    }

    this.auth.login(user).subscribe(() => {
      this.alertService.success('Auth is success')
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
    console.log(user);
  }

}
