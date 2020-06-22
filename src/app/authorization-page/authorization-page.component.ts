import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../admin/shared/components/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../shared/service/auth.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent implements OnInit {

  form: FormGroup
  submitted = false;
  message: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginFail) {
        this.message = 'Please, log in'
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
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
      this.form.reset()
      this.router.navigate(['/home'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
    console.log(user);
  }
}
