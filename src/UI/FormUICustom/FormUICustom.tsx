import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './FormUICustom.module.scss';
import { useEffect } from 'react';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  validationSchema?: z.ZodType<any, any, any>;
}

interface FormUICustomProps {
  inputs: InputProps[];
  buttonLabel: string;
  onSubmit: (data: DataFormType) => void;
}
export type DataFormType = {
  [x: string]: string;
};

function FormUICustom({
  inputs,
  buttonLabel,
  onSubmit,
}: FormUICustomProps): JSX.Element {
  const baseSchema = z.object(
    inputs.reduce((acc, input) => {
      if (input.validationSchema) {
        acc[input.name] = input.validationSchema;
      }
      return acc;
    }, {} as Record<string, z.ZodType<any, any, any>>)
  );

  const schema =
    'password' in baseSchema && 'confirmPassword' in baseSchema
      ? baseSchema.refine((data) => data.password === data.confirmPassword, {
          message: 'Passwords do not match',
          path: ['confirmPassword'],
        })
      : baseSchema;

  const values = inputs.map((input) => ({defaultValue: input.defaultValue}));

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    values,
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log(errors);
    }
  }, [errors]);

  // useEffect(() => {
  //   reset();
  // }, [inputs, reset]);

  useEffect(() => {
    if (inputs) {
      Object.entries(inputs).forEach(([defaultValue, value]) =>
        setValue(defaultValue, value)
      );
    }
  }, [setValue, inputs]);

  const _onSubmit: SubmitHandler<DataFormType> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(_onSubmit)}>
        {inputs.map(
          ({ name, label, type, placeholder, defaultValue, required }) => (
            <div key={name} className={styles.inputWrapper}>
              <div>
                <label htmlFor={name}>{label}</label>
              </div>
              <input
                {...register(name)}
                id={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
              />
              <div className={styles.errorMessage}>
                {errors[name] && (
                  <div role='alert' style={{ color: 'red' }}>
                    {(errors[name]?.message as string) ||
                      'This field is required'}
                  </div>
                )}
              </div>
            </div>
          )
        )}
        <button type='submit' disabled={!isValid}>
          {buttonLabel}
        </button>
      </form>
    </>
  );
}

export default FormUICustom;
