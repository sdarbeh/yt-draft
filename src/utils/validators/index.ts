// ---------- REGEX
export const nameRegex = /^(?=.{2,25}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;

// example@email.com
export const emailRegEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

// 123-456-7890
export const phoneNumRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// 
export const dateRegex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/
export const decimalRegex = /^(?!0+\d?[.0]*$)\d\d?(?:\.\d\d?)?$/

// validators
export const nameValidator = {
  required: true,
  pattern: nameRegex,
};

export const emailValidator = {
  required: true,
  pattern: emailRegEx,
};

export const phoneValidator = {
  required: true,
  pattern: phoneNumRegEx,
};

export const dateValidator = {
  required: true,
  pattern: dateRegex,
};

export const messageValidator = {
  required: true,
  minLength: 30,
  maxLength: 500,
};

export const checkLength = (str: string, min:number, max:number) => {
  const length = str.length
  return length >= min && length <= max
}

export const hasNumber = (str: string) => str.match(/\d+/g) ? true : false

export const containSpecialChar = (str: string) => {
  const format = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/;
  return format.test(str)
}
