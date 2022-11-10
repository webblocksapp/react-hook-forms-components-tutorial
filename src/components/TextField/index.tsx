import { useEffect, useState } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';
import { FormHelperText } from '@components';

export type TextFieldProps = MuiTextFieldProps & { control?: Control<any>; errorMessage?: string };

export const TextField: React.FC<TextFieldProps> = ({
  control,
  errorMessage: errorMessageProp,
  helperText,
  ...rest
}) => {
  const controller =
    control &&
    useController({
      name: rest.name || '',
      control,
      defaultValue: rest.value,
    });

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [value, setValue] = useState<unknown>('');

  const onChange: TextFieldProps['onChange'] = (event) => {
    controller?.field?.onChange(event);
    rest?.onChange?.(event);
  };

  const onBlur: TextFieldProps['onBlur'] = (event) => {
    controller?.field?.onBlur();
    rest?.onBlur?.(event);
  };

  useEffect(() => {
    setError(Boolean(controller?.fieldState?.error?.message) || rest.error || false);
  }, [controller?.fieldState?.error?.message, rest.error]);

  useEffect(() => {
    setErrorMessage(controller?.fieldState?.error?.message || errorMessageProp || '');
  }, [controller?.fieldState?.error?.message, errorMessageProp]);

  useEffect(() => {
    setValue(controller?.field?.value);
  }, [controller?.field?.value]);

  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);

  return (
    <>
      <MuiTextField {...rest} onChange={onChange} onBlur={onBlur} value={value} error={error} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormHelperText error={error}>{errorMessage}</FormHelperText>}
    </>
  );
};
