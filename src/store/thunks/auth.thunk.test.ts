import { User } from '../../types/User';
import { fetchLogin } from './auth.thunk';

describe('authThunk', () => {
  it('should register user', async () => {
    // window.fetch = mockFetch(_data);
    const mockData: Pick<User, 'login' | 'password'> = {
      login: 'farmer5@gmail.com',
      password: '12345',
    };
    const dispatch = jest.fn();
    const thunk = fetchLogin(mockData);
    await thunk(dispatch, () => {}, null);
    console.log(dispatch.mock.calls);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('auth/fetchLogin/pending');
    expect(end[0].type).toBe('auth/fetchLogin/fullfilled');
    expect(end[0].payload).toBe('auth/fetchLogin/fullfilled');
  });
  it.todo('should login user');
});

export function mockFetch(data: any) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

// const _data = {
//   id: 1,
//   name: 'Bob',
//   email: 'bob@gmail.com',
//   role: 'FARMER',
// };
