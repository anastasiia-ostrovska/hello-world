import {
  emailValidationMessages,
  passwordValidationMessages,
} from '@/modules/forms/validation/constants/validation-messages';
import {
  containsDigit,
  containsSpecialCharacter,
  containsUppercase,
  validEmailFormat,
} from '@/modules/forms/validation/validators/regExpValidators';
import { fieldIsRequired } from '@/modules/forms/validation/validators/requiredValidators';
import { whitespacesForbidden } from '@/modules/forms/validation/validators/whitespaseValidators';
import { minLength14 } from '@/modules/forms/validation/validators/lengthValidators';

export const emailValidationRules = {
  fieldIsRequired: fieldIsRequired(emailValidationMessages.required),
  whitespacesForbidden: whitespacesForbidden(
    emailValidationMessages.whitespacesForbidden
  ),
  validEmailFormat: validEmailFormat(
    emailValidationMessages.invalidEmailFormat
  ),
};

export const passwordValidationRules = {
  fieldIsRequired: fieldIsRequired(passwordValidationMessages.required),
  whitespacesForbidden: whitespacesForbidden(
    passwordValidationMessages.whitespacesForbidden
  ),
  uppercaseRequired: containsUppercase(
    passwordValidationMessages.uppercaseRequired
  ),
  digitRequired: containsDigit(passwordValidationMessages.digitRequired),
  specialCharacterRequired: containsSpecialCharacter(
    passwordValidationMessages.specialCharacterRequired
  ),
  minLength14: minLength14(passwordValidationMessages.minLength14),
};
