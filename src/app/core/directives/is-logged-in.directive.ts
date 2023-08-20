import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[appIsLoggedIn]'
})
export class IsLoggedInDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authService: AuthService) {
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
