import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cardItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!: Cart;
constructor(private cartService: CartService){
  
}
ngOnInit(){

}
removeFromCart(cartItem: CartItem){
this.cartService.removeFromCart(cartItem.food.id);
this.setCart();
}
changeQuantiy(cartItem:CartItem, quantityInString: string){
const quantity = parseInt(quantityInString);
this.cartService.changeQuantity(cartItem.food.id, quantity);
this.setCart();

}
setCart(){
  this.cart = this.cartService.getCart();
}
}
