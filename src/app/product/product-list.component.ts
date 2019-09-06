import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = "Product List";
  imageWidth: number = 30;
  imageMarging: number = 2;
  showImage: boolean = false;
  errorMessage:  string = "";
  
  _listFilter: string;
  
  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filterdProducts :IProduct[];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private productService: ProductService){
    this.listFilter = "";
  }
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
    console.log("OnInit Method");
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filterdProducts = this.products;},
      error: err => this.errorMessage = err
    });
    
  }
  onRatingClicked(message: string): void{
    this.pageTitle = "Product List  -  " + message; 
  }
}