import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useBaseForm, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
import * as yup from 'yup';

export const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  schema: yup.AnyObjectSchema,
  props?: Omit<UseFormProps<TFieldValues, TContext>, 'resolver' | 'defaultValues'>
): UseFormReturn<TFieldValues, TContext> => {
  return useBaseForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: schema.getDefault(),
    ...props,
  });
};
