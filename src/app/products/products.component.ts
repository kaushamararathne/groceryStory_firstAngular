import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isLowInventory: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }public products = [{
    'productId' : "001",
    'productName' : "White Basmathi Rice",
    'createdDate': "Jan 29, 2020",
    'quantity': 100,
    'unitPrice': "Rs. 400",
    'productDescription':"White Basmathi Rice imported from pakistan"
  },
  { 
  'productId' : "002",
  'productName' : "Flour",
  'createdDate': "Jan 29, 2020",
  'quantity': 50,
  'unitPrice': "Rs. 190",
  'productDescription':"Super Fine Whole grain general Purpose flour"
  },
  
  { 
    'productId' : "003",
    'productName' : "sugar",
    'createdDate': "Jan 29, 2020",
    'quantity': 1200,
    'unitPrice': "Rs. 200",
    'productDescription':"White sugar manufactured by Palwatte Factory"
  },
  {
    'productId' : "004",
    'productName' : "Dhal",
    'createdDate': "Jan 29, 2020",
    'quantity': 10,
    'unitPrice': "Rs. 200",
    'productDescription':"Imported mysoor dhal from India"
  }]}