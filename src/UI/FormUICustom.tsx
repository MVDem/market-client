import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validationSchema?: z.ZodType<any, any, any>;
}

interface FormUICustomProps {
  inputs: InputProps[];
  buttonLabel: string;
}

function FormUICustom({ inputs, buttonLabel }: FormUICustomProps): JSX.Element {
  const schema = z.object(
    inputs.reduce((acc, input) => {
      if (input.validationSchema) {
        acc[input.name] = input.validationSchema;
      }
      return acc;
    }, {} as Record<string, z.ZodType<any, any, any>>)
  );

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, label, type, placeholder, required }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            {...register(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
          />
          {errors[name] && (
            <div role='alert' style={{ color: 'red' }}>
              {(errors[name]?.message as string) || 'This field is required'}
            </div>
          )}
        </div>
      ))}
      <button type='submit'>{buttonLabel}</button>
    </form>
  );
}

export default FormUICustom;
