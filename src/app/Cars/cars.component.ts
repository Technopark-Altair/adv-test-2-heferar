import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car.model';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<Car>;

  constructor(private CarService: CarService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cars = this.CarService.getCars();
  }
  
  addNewCar(newCar: Car){
    this.CarService.addCar(newCar);
  }

}