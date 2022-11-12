import { TextField } from '@components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

type Schema = { name: string };

const schema: yup.SchemaOf<{ name: string }> = yup.object({
  name: yup.string().required(),
});

export default {
  title: 'Form Components/TextField',
  component: TextField,
};

export const WithReactHookForm = () => {
  const { control, watch } = useForm<Schema>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <>
      <div>
        <TextField label="Name" name="name" control={control} value="John" />
      </div>
      <div>
        <pre>
          <code>{JSON.stringify(watch(), null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export const WithoutReactHookForm = () => {
  const [data, setData] = useState({ name: '' });

  return (
    <>
      <div>
        <TextField
          label="Any Field"
          name="name"
          onChange={(event) => {
            setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
          }}
          value={data.name}
        />
      </div>
      <div>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};
