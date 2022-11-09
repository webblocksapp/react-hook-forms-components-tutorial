import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps;

export const TextField: React.FC<MuiTextFieldProps> = (props) => {
  const onChange: TextFieldProps['onChange'] = (event) => {
    //Connecting it with react hook forms

    props?.onChange?.(event);
  };

  return <MuiTextField {...props} onChange={onChange} />;
};
