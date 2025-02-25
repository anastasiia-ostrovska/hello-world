import {
  containsDigit,
  containsSpecialCharacter,
  containsUppercase,
  fieldIsRequired,
  minLength14,
  validEmailFormat,
  whitespacesForbidden,
} from '@shared/forms';
import {
  emailValidationMessage,
  passwordValidationMessage,
} from './validation-messages';

export const emailValidationRules = {
  fieldIsRequired: fieldIsRequired(emailValidationMessage.required),
  whitespacesForbidden: whitespacesForbidden(
    emailValidationMessage.whitespacesForbidden
  ),
  validEmailFormat: validEmailFormat(emailValidationMessage.invalidEmailFormat),
};

export const passwordValidationRules = {
  fieldIsRequired: fieldIsRequired(passwordValidationMessage.required),
  whitespacesForbidden: whitespacesForbidden(
    passwordValidationMessage.whitespacesForbidden
  ),
  uppercaseRequired: containsUppercase(
    passwordValidationMessage.uppercaseRequired
  ),
  digitRequired: containsDigit(passwordValidationMessage.digitRequired),
  specialCharacterRequired: containsSpecialCharacter(
    passwordValidationMessage.specialCharacterRequired
  ),
  minLength14: minLength14(passwordValidationMessage.minLength14),
};
