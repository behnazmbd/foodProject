import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: Number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 1 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 2 },
      { name: 'Fry', count: 1 },
    ];
  }
  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Makaron',
        price: 30,
        cookTime: '40-60',
        favorite: true,
        origins: ['Italia', 'us'],
        stars: 5.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['Dessert', 'SlowFood'],
      },
      {
        id: 2,
        name: 'Hotdog',
        price: 75,
        cookTime: '20-40',
        favorite: false,
        origins: ['France', 'us'],
        stars: 7.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 3,
        name: 'egg',
        price: 5,
        cookTime: '10-20',
        favorite: true,
        origins: ['iaran', 'us'],
        stars: 2.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['Breakfast', 'SlowFood'],
      },
      {
        id: 4,
        name: 'Hamburger',
        price: 5,
        cookTime: '40-55',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 8.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 5,
        name: 'French Fries',
        price: 5,
        cookTime: '10-15',
        favorite: true,
        origins: ['Belguim', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 6,
        name: 'Cheeseburger',
        price: 5,
        cookTime: '20-45',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 4.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
    ];
  }
}
