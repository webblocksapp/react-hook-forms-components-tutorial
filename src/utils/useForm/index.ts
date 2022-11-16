import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useBaseForm, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
import * as yup from 'yup';

type ResetOptions = Parameters<UseFormReturn['reset']>[1];
type UseFormReturnOverrides = {
  reset: (options?: ResetOptions) => void;
};

export const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  schema: yup.AnyObjectSchema,
  props?: Omit<UseFormProps<TFieldValues, TContext>, 'resolver' | 'defaultValues'>
): Omit<UseFormReturn<TFieldValues, TContext>, 'reset'> & UseFormReturnOverrides => {
  const form = useBaseForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: schema.getDefault(),
    ...props,
  });

  const reset = (options?: ResetOptions) => {
    form.reset(schema.getDefaultFromShape(), options);
  };

  return { ...form, reset };
};
