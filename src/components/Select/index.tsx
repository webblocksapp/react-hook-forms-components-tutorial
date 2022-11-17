import { useEffect, useMemo, useState } from 'react';
import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';
import { FormHelperText } from '@components';

export type SelectProps = MuiSelectProps & {
  control?: Control<any>;
  errorMessage?: string;
  helperText?: string;
};

export const Select: React.FC<SelectProps> = ({
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

  const initialValue = useMemo(() => (rest.multiple ? [] : ''), [rest.multiple]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [value, setValue] = useState<unknown>(initialValue);

  /**
   * Extends the onChange method by adding the react hook forms controller onChange method.
   */
  const onChange: SelectProps['onChange'] = (event, child) => {
    controller?.field?.onChange(event);
    rest?.onChange?.(event, child);
  };

  /**
   * Extends the onBlur method by adding the react hook forms controller onBlur method.
   */
  const onBlur: SelectProps['onBlur'] = (event) => {
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
    <>
      <MuiSelect {...rest} onChange={onChange} onBlur={onBlur} value={value} error={error} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormHelperText error={error}>{errorMessage}</FormHelperText>}
    </>
  );
};
