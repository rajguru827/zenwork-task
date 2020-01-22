import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {

  shopForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.shopForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
      address: this.fb.array([
        this.createAddress()
      ]),
      subUsers: this.fb.array([
        this.createSubUser()
      ])
    });
  }

  get address() {
    return this.shopForm.get('address') as FormArray;
  }

  createAddress(): FormGroup {
    return this.fb.group({
      plotno: ['', Validators.required],
      locality: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  addAddress() {
    this.address.push(this.createAddress());
  }

  removeAddress(i: number) {
    this.address.removeAt(i);
  }

  get subUsers() {
    return this.shopForm.get('subUsers') as FormArray;
  }

  createSubUser() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addSubUser() {
    this.subUsers.push(this.createSubUser());
  }

  removeSubUser(i: number) {
    this.subUsers.removeAt(i);
  }

  onSubmit() {
    if(this.shopForm.valid) {
      console.log(this.shopForm.value);
    }
  }

}
