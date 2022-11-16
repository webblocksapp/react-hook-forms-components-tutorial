import { Button, TextField, Stack } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '@utils';
import { useEffect } from 'react';
import * as yup from 'yup';

export default {
  title: 'Implementations/Form validation',
};

type Schema1 = { name: string; age: number };

const schema1: yup.SchemaOf<Schema1> = yup.object({
  name: yup.string().required().default(''),
  age: yup.number().required().default(0),
});

export const ResetAndFill = () => {
  const { control, handleSubmit, reset, fill, watch } = useForm<Schema1>(schema1);

  const submit = (data: Schema1) => {
    alert(JSON.stringify(data));
    reset();
  };

  useEffect(() => {
    //Done an api call before
    const response = { name: 'John', age: 20 };
    fill(response);
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <TextField label="Name" name="name" control={control} />
        <TextField label="Age" name="age" control={control} />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={() => fill({ name: 'sdasddsa', age: 12321321 })}>
            Fill
          </Button>
          <Button variant="contained" onClick={() => reset()}>
            Reset
          </Button>
        </Stack>
      </Stack>
      <pre>
        <code>{JSON.stringify(watch(), null, 2)}</code>
      </pre>
    </form>
  );
};
