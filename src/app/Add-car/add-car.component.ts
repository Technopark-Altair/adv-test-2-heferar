import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  @Output() addedNewCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
    this.car = new Car();
  }
  addCarInCarsComponent(){
    this.addedNewCar.emit(this.car);
    this.car = new Car();
  }

}