import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class customValidatorsService {

  public passwordMismatchValidator: ValidatorFn = (fg: AbstractControl): ValidationErrors | null => {
    const passwordControl = fg.get('password');
    const confirmPasswordControl = fg.get('confirm_Password');
    // console.log('validators called');
    //   console.log(passwordControl);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordMismatch']
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}
