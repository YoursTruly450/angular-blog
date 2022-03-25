import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { AuthServices } from '../shared/services/auth.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(
    public auth: AuthServices,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.message = null;
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (!!params['loginAgain']) {
          this.message = 'You cannot access to this page. Authentification required.';
        }
      }
    )
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.submitted = true;

    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.submitted = false;
        this.router.navigate(['/admin', 'dashboard']);
      },
      () => {
        this.submitted = false;
      }
    );
  }

}
