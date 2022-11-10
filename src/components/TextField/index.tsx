import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Control, Controller, useController } from 'react-hook-form';

export type TextFieldProps = MuiTextFieldProps & { control?: Control<any> };

export const TextField: React.FC<TextFieldProps> = ({ control, ...rest }) => {
  const controller =
    control &&
    useController({
      name: rest.name || '',
      control,
      defaultValue: rest.value,
    });

  const onChange: TextFieldProps['onChange'] = (event) => {
    controller?.field?.onChange(event);
    rest?.onChange?.(event);
  };

  const onBlur: TextFieldProps['onBlur'] = (event) => {
    controller?.field?.onBlur();
    rest?.onBlur?.(event);
  };

  return (
    <MuiTextField
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={controller?.field?.value || rest.value}
      helperText={controller?.fieldState?.error?.message || rest.helperText}
      error={Boolean(controller?.fieldState?.error?.message) || rest.error}
    />
  );
};
