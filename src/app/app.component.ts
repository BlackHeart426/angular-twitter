import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './shared/directives/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(RefDirective) refDir: RefDirective
  title = 'angular-twitter';
  constructor(private resolver: ComponentFactoryResolver) {
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)

    component.instance.title = 'Dynamic'
    component.instance.closeModal.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }
}
