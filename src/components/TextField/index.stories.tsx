import { TextField } from '@components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Schema = { name: string };

const schema: yup.SchemaOf<{ name: string }> = yup.object({
  name: yup.string().required(),
});

export default {
  title: 'Form Components/TextField',
  component: TextField,
};

export const Primary = () => {
  const { control } = useForm<Schema>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <>
      <div>
        <TextField
          label="Name"
          name="name"
          control={control}
          onChange={() => {
            console.log('hello world');
          }}
          onBlur={() => {
            console.log('hello world on blur');
          }}
          value="Hello"
          helperText="You can write a name on any language"
        />
      </div>
      <br />
      <div>
        <TextField
          label="Any Field"
          onChange={() => {
            console.log('hello world');
          }}
          onBlur={() => {
            console.log('hello world on blur');
          }}
          value="xxxxx"
        />
      </div>
    </>
  );
};
