import { RefObject } from "react";
import { AppColorTypes } from "utils/constants/types";

export interface InputMessage extends AppColorTypes {
  type: 'normal' | 'warning' | 'error'
  message: string;
}

export interface Criteria {
  name: string;
  validator: Function
  value: string;
}

export interface FormCriteria {
  inputId: string;
  criterias: Criteria[];
  inputValue: string;
  parent: RefObject<HTMLDivElement>
}