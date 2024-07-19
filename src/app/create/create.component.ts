import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  createForm!: FormGroup;
  routeTitle: any;
  constructor(private route: ActivatedRoute, private user: UserService, private router: Router) {
    this.createForm = new FormGroup({
      name: new FormControl('name', [Validators.required]),
      username: new FormControl('username', [Validators.required]),
      email: new FormControl('email', [Validators.required, Validators.email]),
      street: new FormControl('street', [Validators.required]),
      suite: new FormControl('suite', [Validators.required]),
      city: new FormControl('city', [Validators.required]),
      zipcode: new FormControl('zipcode', [Validators.required]),
      phone: new FormControl('phone', [Validators.required]),
      website: new FormControl('website', [Validators.required]),
      companyName: new FormControl('companyName', [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.routeTitle = this.route.snapshot.routeConfig?.title
  }
  onSubmit(formValue: any) {
    console.log(formValue);
    return this.user.createUser(formValue).subscribe(res => {
      res = this.createForm.value;
      console.log(res);
      console.log(this.createForm.value);
      this.router.navigate(['index'])
    })
  }
}
