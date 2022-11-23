import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

export type FormControlProps = MuiFormControlProps;

export const FormControl: React.FC<MuiFormControlProps> = (props) => {
  return <MuiFormControl {...props} />;
};
