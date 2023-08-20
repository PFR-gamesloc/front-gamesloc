import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth.service";


@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authService:AuthService) {
  }

  ngOnInit(): void {
    this.updateView()
  }

  updateView(): void {
    // Clear in any case to avoid duplication of templateRef when navigating between the same component
    this.viewContainer.clear();
    let role:string  = sessionStorage.getItem("role") ?? localStorage.getItem("role") ?? " ";
    if(role !== null){
      if ((this.authService.isAuth.value) && role.split(" ")[1] === "ADMIN") {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }
}


