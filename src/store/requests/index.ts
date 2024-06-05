// import { API_URL } from '../../config';
// import { User } from '../../types/User';

// const registerRequest = async ({
//   email,
//   password,
//   role,
// }: Pick<User, 'email' | 'password' | 'role'>): Promise<Response> => {
//   try {
//     console.log(API_URL)
//     const response = await fetch(`${API_URL}/auth/signup`, {
//       method: 'POST',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, role }),
//     });

//     // if (response.ok) {
//       return response;
//     // } else {
//     //   // const errorData = await response.json();
//     //   // return errorData;
//     //   throw new Error();
//     // }
//   } catch (error) {
//     console.error('Error:', error);
//     // return { success: false, message: 'Something got wrong' };
//     return error as Response;
//   }
// };

// export { registerRequest };
