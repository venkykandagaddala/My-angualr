import {Component} from "@angular/core"
@Component({
  selector: "pm-root",
  template: `
    <div class="col-md-12"><br>
      <h1 class="text-center">{{pageTitle}}</h1><br>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent{
  pageTitle: string = "ACME product Management";
}