import { Injectable } from '@angular/core';

// TP things

import {
  InjectableType,
  ɵComponentType as ComponentType,
  ɵDirectiveType as DirectiveType,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }


//   UntilDestroy(options: UntilDestroyOptions = {}): ClassDecorator {
//     return (type: any) => {
//       if (isPipe(type)) {
//         decoratePipe(type, options);
//       } else {
//         decorateProviderDirectiveOrComponent(type, options);
//       }

//       markAsDecorated(type);
//     };
//   }

//   decorateProviderDirectiveOrComponent<T>(
//     type: InjectableType<T> | DirectiveType<T> | ComponentType<T>,
//     options: UntilDestroyOptions
//   ): void {
//     type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
//   }

//   markAsDecorated<T>(
//     type: InjectableType<T> | PipeType<T> | ɵDirectiveType<T> | ɵComponentType<T>
//   ): void {
//   // Store this property on the prototype if it's an injectable class, component or directive.
//   // We will be able to handle class extension this way.
//   type.prototype[DECORATOR_APPLIED] = true;
// }
}
