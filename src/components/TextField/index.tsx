import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

export type TextFieldProps = MuiTextFieldProps & { control?: Control };

export const TextField: React.FC<TextFieldProps> = ({ control, ...rest }) => {
  const onChange: TextFieldProps['onChange'] = (event) => {
    //Connecting it with react hook forms

    rest?.onChange?.(event);
  };

  return (
    <Controller
      control={control}
      name={rest.name || ''}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <MuiTextField
          {...rest}
          onChange={onChange}
          onBlur={onBlur}
          value={value || ''}
          helperText={error?.message}
          error={Boolean(error?.message)}
        />
      )}
    />
  );
};
