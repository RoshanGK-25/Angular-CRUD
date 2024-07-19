import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  routeTitle: any;
  updateForm!: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) {
    this.updateForm = new FormGroup({
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


}
