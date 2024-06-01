import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validationSchema?: z.Schema;
}

function FormUICustom({ inputs }: { inputs: InputProps[] }): JSX.Element {
    const schema = z.object({
    email: z.string().email('Invalid email address').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
    name: z.string().min(2, 'Name must be at least 2 characters').optional(),
    city: z.string().min(2, 'City must be at least 2 characters').optional(),
    country: z.string().min(2, 'Country must be at least 2 characters').optional(),
    phone: z.coerce.number().min(10, 'Phone must be at least 10 digits').optional(),
  });

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
      {inputs.map((input) => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
                {...register(input.name as keyof FormFields)}
                id={input.name}
                type={input.type}
                placeholder={input.placeholder}
            />
            {errors[input.name as keyof FormFields] && (
              <span role="alert">
              {(errors[input.name as keyof FormFields]?.message as string) || 'This field is required'}
            </span>  
        )};
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
}

export default FormUICustom;
