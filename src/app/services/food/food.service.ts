import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
    {
      id:1,
      name: 'Makaron',
      price: 30, 
      cookTime: '40-60',
      favorite: true,
      origins:['Italia', 'us'],
      stars: 5.5,
      imageUrl: '/assets/images/food-1.jpg',
      tags:['Dessert','Makaron']
    },
    {
      id:2,
      name: 'Hotdog',
      price: 75, 
      cookTime: '20-40',
      favorite: false,
      origins:['France', 'us'],
      stars: 7.5,
      imageUrl: '/assets/images/food-2.jpg',
      tags:['FastFood','Hotdog']
    },
    {
      id:3,
      name: 'egg',
      price: 5, 
      cookTime: '10-20',
      favorite: true,
      origins:['iaran', 'us'],
      stars: 2.5,
      imageUrl: '/assets/images/food-6.jpg',
      tags:['FastFood','Egg']
    },
    {
      id:4,
      name: 'Hamburger',
      price: 5, 
      cookTime: '40-55',
      favorite: false,
      origins:['germany', 'us'],
      stars: 8.5,
      imageUrl: '/assets/images/food-6.jpg',
      tags:['FastFood','Hamburger']
    },
    {
      id:5,
      name: 'French Fries',
      price: 5, 
      cookTime: '10-15',
      favorite: true,
      origins:['Belguim', 'us'],
      stars: 3.5,
      imageUrl: '/assets/images/food-6.jpg',
      tags:['FastFood','Potato']
    },
    {
      id:6,
      name: 'Cheeseburger',
      price: 5, 
      cookTime: '20-45',
      favorite: false,
      origins:['germany', 'us'],
      stars: 4.5,
      imageUrl: '/assets/images/food-6.jpg',
      tags:['FastFood','Cheeseburger']
    }
    ]
    
  }
}
