import { Criteria, InputMessage } from "../form-widgets/types";

export interface InputBase {
  name: string;
  displayName?: string;
  refs?: any;
  options?: any;
  value?: string;
  message?: InputMessage
}

export interface InputTypes extends InputBase {
  element: 'input' | 'textarea' | 'select';
  type?: string;
  disabled?: boolean;
  selectOptions?: string[];
  criterias?: Criteria[]
  showStringLength?: boolean
} 