import { TextField } from '@components';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema: yup.SchemaOf<{ name: string }> = yup.object({
  name: yup.string().required(),
});

export default {
  title: 'Form Components/TextField',
  component: TextField,
};

export const Primary = () => {
  const { control } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <>
      <TextField
        label="Name"
        name="name"
        control={control}
        onChange={() => {
          console.log('hello world');
        }}
      />

      <TextField label="Any Field" />
    </>
  );
};
