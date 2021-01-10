import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  confirmOrder:FormGroup ;
  constructor(private fb:FormBuilder ,private router:Router) { }

  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  ngOnInit(): void {
    this.confirmOrder = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    });
  }

  get registerFormControl() {
    return this.confirmOrder.controls;
  }

  handleRegister() {
    console.log(this.confirmOrder.value);
  }
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}




