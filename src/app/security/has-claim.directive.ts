import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasClaim]'
})
  /*
  https://www.codemag.com/article/1811031/Security-in-Angular-Part-3
  
  The @Input() decorator tells Angular to pass the value on the 
  right-hand side of the equals sign to the set property named 
  hasClaim(). The parameter to the hasClaim property is named claimType. 
  Pass this parameter to the new hasClaim() method you created in 
  the SecurityService class. If this method returns a true, which 
  means that the claim exists, the UI element to which this 
  directive is applied is displayed on the screen using the 
  createEmbeddedView() method. If the claim doesn't exist, 
  the UI element is removed by calling the clear() method on the 
  viewContainer.

  <li>
    <ng-container *ngIf="securityObject.isAuthenticated">
        <a routerLink="/products" *hasClaim="'canAccessProducts'">Products</a>
    </ng-container>
  </li>

  <button class="btn btn-primary"
        (click)="addProduct()"
        *hasClaim="'canAddProduct'">
    Add New Product
 </button>

  */
export class HasClaimDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
    @Input() set hasClaim(claimType: any) {
      if (claimType) {
          // Add template to DOM
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
          // Remove template from DOM
          this.viewContainer.clear();
      }
    }
  /*
  *hasClaim="['canAddProduct',
     'canAccessCategories']"

    @Input() set hasClaim(claimType: any) : boolean {
      let ret: boolean = false;
  
      // See if an array of values was passed in.
      if (typeof claimType === "string") {
          ret = this.isClaimValid(claimType);
      }
      else {
          let claims: string[] = claimType;
          if (claims) {
              for (let index = 0;
              index < claims.length;
              index++) {
                  ret = this.isClaimValid(claims[index]);
                  // If one is successful, then let them in
                  if (ret) {
                      break;
                  }
              }
          }
      }
  
      return ret;
  }
  */
  
}
