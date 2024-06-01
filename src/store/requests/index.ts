import { API_URL, SERVER_STATUS } from '../../config';
import { User } from '../../types/User';

const registerRequest = async ({
  login,
  password,
  role,
}: Pick<User, 'login' | 'password' | 'role'>) => {
  if (SERVER_STATUS === 'ON') {
    console.log(SERVER_STATUS);
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
  } else {
    try {
      if (!login || !password || !role) {
        throw new Error('Some fields are empty');
      }
      return Promise.resolve({
        ok: true,
        json: () => true,
      });
    } catch (error) {
      return { error: error };
    }
  }
};

export { registerRequest };
