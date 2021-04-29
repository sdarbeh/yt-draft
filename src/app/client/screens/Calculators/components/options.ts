import { decimalRegex } from "../../../../../utils/validators";

export const cash = {
  options: {
    type: "number",
    min: "1",
    max: "9999999",
    step: "1",
  },
  validator: {
    required: true,
    valueAsNumber: true,
    minLength: 1,
    maxLength: 7,
  },
};

export const decimal = {
  options: {
    type: "number",
    min: ".3",
    max: "35",
    step: "0.01",
  },
  validator: {
    pattern: decimalRegex,
    required: true,
  },
};

export const term = {
  validator: {
    required: true,
    valueAsNumber: true
  },
  select: ['25', '30', '35', '40']
}