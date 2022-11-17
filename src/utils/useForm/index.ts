import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import {
  useForm as useBaseForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
  UseFormReset,
} from 'react-hook-form';
import * as yup from 'yup';

type ResetOptions = Parameters<UseFormReturn['reset']>[1];
type UseFormReturnOverrides<TFieldValues extends FieldValues = FieldValues> = {
  reset: (options?: ResetOptions) => void;
  fill: UseFormReset<TFieldValues>;
};

export const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  schema: yup.AnyObjectSchema,
  props?: Omit<UseFormProps<TFieldValues, TContext>, 'resolver' | 'defaultValues'>
): Omit<UseFormReturn<TFieldValues, TContext>, 'reset'> & UseFormReturnOverrides<TFieldValues> => {
  const defaultValues = useMemo(() => schema.getDefault(), [schema]);
  const form = useBaseForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues,
    ...props,
  });

  const reset = (options?: ResetOptions) => {
    form.reset(defaultValues, options);
  };

  const fill: UseFormReset<TFieldValues> = (values, keepStateOptions) => {
    form.reset({ ...defaultValues, ...values }, keepStateOptions);
  };

  return { ...form, reset, fill };
};
