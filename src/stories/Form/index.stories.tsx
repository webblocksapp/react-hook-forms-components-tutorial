import { Button, TextField, Stack } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default {
  title: 'Implementations/Form validation',
};

type Schema1 = { name: string; age: number };

const schema1: yup.SchemaOf<Schema1> = yup.object({
  name: yup.string().required(),
  age: yup.number().required(),
});

export const ResetAndFill = () => {
  const { control, handleSubmit } = useForm<Schema1>({
    resolver: yupResolver(schema1),
    mode: 'all',
  });

  const submit = (data: Schema1) => {
    alert(JSON.stringify(data));
  };

  const fill = () => {};

  const reset = () => {};

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <TextField label="Name" name="name" control={control} />
        <TextField label="Age" name="age" control={control} />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={fill}>
            Fill
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};