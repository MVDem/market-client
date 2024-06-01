import { z } from 'zod';

export const firstNameInput = {
  name: 'firstName',
  label: 'First name',
  type: 'text',
  placeholder: 'Enter your name',
  required: true,
  validationSchema: z
    .string()
    .min(2, 'First name must be at least 2 characters'),
};

export const lastNameInput = {
  name: 'lastName',
  label: 'Last name',
  type: 'text',
  placeholder: 'Enter your last name',
  required: true,
  validationSchema: z
    .string()
    .min(2, 'Last name must be at least 2 characters'),
};

export const emailInput = {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your email',
  required: true,
  validationSchema: z.string().email('Invalid email address'),
};

export const passwordInput = {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true,
  validationSchema: z
    .string()
    .min(6, 'Password must be at least 6 characters'),
};

export const cityInput = {
  name: 'city',
  label: 'City',
  type: 'text',
  placeholder: 'Enter your city',
  required: true,
  validationSchema: z.string().min(2, 'City must be at least 2 characters'),
};

export const countryInput = {
  name: 'country',
  label: 'Country',
  type: 'text',
  placeholder: 'Enter your country',
  required: true,
  validationSchema: z.string().min(2, 'Country must be at least 2 characters'),
};

export const phoneInput = {
  name: 'phone',
  label: 'Phone',
  type: 'text',
  placeholder: 'Enter your phone',
  required: true,
  validationSchema: z.string().min(10, 'Phone must be at least 10 digits'),
};
