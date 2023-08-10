import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthServiceService} from "../auth/auth-service.service";

@Directive({
  selector: '[appIsLoggedIn]'
})
export class IsLoggedInDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authService: AuthServiceService) {
  }

  ngOnInit(): void {
    this.updateView()
  }

  updateView(): void {
    this.viewContainer.clear();
    if (this.authService.isAuth.value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
