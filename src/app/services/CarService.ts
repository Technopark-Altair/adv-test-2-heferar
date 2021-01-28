import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Array<Car> = [
    {id: 1,brandName: 'LADA',modelName: 'CALINA',priceInRub: 120000},
    {id: 2,brandName: 'BAZ',modelName: 'PATRIOT',priceInRub: 110000},
    {id: 3,brandName: 'ZIGULI',modelName: '10',priceInRub: 100000},
  
  ];