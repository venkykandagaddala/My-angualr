import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule} from "@angular/router"
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { path: "products/:id", canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
