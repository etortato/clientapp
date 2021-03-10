import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  orderForm = this.formBuilder.group({ order: '' });
  public orders: any;
  public errorMessage: string = "";
  constructor(private formBuilder: FormBuilder,
    private orderService: MainService) { }
  ngOnInit() {
    this.updateOrderList();
  }
  updateOrderList() {
    this.orderService.getOrders().subscribe(data => this.orders = data);
  }
  onSubmit(): void {
    const formData = new FormData();
    formData.append('order', this.orderForm.controls['order'].value);
    this.orderService.placeOrder(formData).subscribe(
      data => {
        this.updateOrderList();
        this.errorMessage = "Order successfully added!";
      },
      error => this.errorMessage = error.error);
  }
}
