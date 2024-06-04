import { API_URL } from '../../config';
import { User } from '../../types/User';

const registerRequest = async ({
  login,
  password,
  role,
}: Pick<User, 'login' | 'password' | 'role'>) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: login,
      password: password,
      role: role,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return response;
};

export { registerRequest };
