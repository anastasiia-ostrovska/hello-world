import {
  emailValidationMessages,
  passwordValidationMessages,
} from '@/modules/forms/validation/constants/validation-messages';
import {
  containsDigit,
  containsSpecialCharacter,
  containsUppercase,
  fieldIsRequired,
  minLength14,
  validEmailFormat,
  whitespacesForbidden,
} from '@/shared/forms';

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
