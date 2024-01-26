import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
  
  // Les lignes commenter
  // name="John Doe";

  // addToCart: number=0;
  // product= {
  //   name: 'iPhone 13',
  //   price: 999,
  //   color: 'Red',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/assets/images/iphone.png'
  // }

  // getDiscountPrice(){
  //   return this.product.price - (this.product.price * this.product.discount / 100)
  // }

  // itInStock(){
  //   let rep = this.product.inStock > 0 ? 'Only ' + this.product.inStock + ' item(s) left': 'Not in stock'
  //   return rep;
  // }

  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //      this.addToCart -- ;
  //   }
  // }

  // incrementCartValue(){
  //   while(this.product.inStock > this.addToCart ){
  //     this.addToCart ++ ;
  //   }
  // }

  // onNameChange(event:any){
  //   this.name = event.target.value;
  // }

}
