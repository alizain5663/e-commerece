import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
@ViewChild('FileSelect') FileSelect:ElementRef |any;
color= ["Red" ,"Blue", "Black", "Pink"];
selectSize=["S" ,"M",  "L", "X-L" , "XX-L"];
 categories=["Cap", "Hoodies", "Watch", "Bags"];
 newSizeArray:any=[];
 imageArray: any = [];
 disableButtonTrue: boolean = false;
 myProductForm: FormGroup | any;

  constructor(
    private ToastrService: ToastrService,
    private formBUilder:FormBuilder,
    private productService: ProductService
  
  ) {this.buidlForm() }

  ngOnInit(): void {
  }
 buidlForm(){
  this.myProductForm = this.formBUilder.group({
    productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    description: new FormControl('', Validators.required),
    color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    category: new FormControl('', Validators.required),
    size: new FormArray([]),
    productMaterial: new FormControl('', Validators.required)
  })
 }

}
