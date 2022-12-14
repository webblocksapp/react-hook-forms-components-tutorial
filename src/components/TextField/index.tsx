import { useEffect, useState } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';
import { Box, FormHelperText } from '@components';

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

  /**
   * Extends the onChange method by adding the react hook forms controller onChange method.
   */
  const onChange: TextFieldProps['onChange'] = (event) => {
    controller?.field?.onChange(event);
    rest?.onChange?.(event);
  };

  /**
   * Extends the onBlur method by adding the react hook forms controller onBlur method.
   */
  const onBlur: TextFieldProps['onBlur'] = (event) => {
    controller?.field?.onBlur();
    rest?.onBlur?.(event);
  };

  /**
   * Computed error flag from react hook forms controller or error prop.
   */
  useEffect(() => {
    setError(Boolean(controller?.fieldState?.error?.message) || rest.error || false);
  }, [controller?.fieldState?.error?.message, rest.error]);

  /**
   * Computed error message from react hook forms controller or error message prop.
   */
  useEffect(() => {
    setErrorMessage(controller?.fieldState?.error?.message || errorMessageProp || '');
  }, [controller?.fieldState?.error?.message, errorMessageProp]);

  /**
   * Computed value from react hook form or value prop.
   */
  useEffect(() => {
    setValue(controller?.field?.value ?? (rest.value || ''));
  }, [controller?.field?.value, rest.value]);

  return (
    <Box>
      <MuiTextField {...rest} onChange={onChange} onBlur={onBlur} value={value} error={error} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormHelperText error={error}>{errorMessage}</FormHelperText>}
    </Box>
  );
};
TextField.defaultProps = {
  fullWidth: true,
};
