import { rest } from 'msw';
import { user } from './dummy';
import { teams } from './dummy';
type UserData = {
  email: string;
  name: string;
  token: string;
};
interface SignupData {
  email: string;
  password: string;
  nickname: string;
  phonenumber: string;
  gender: string;
  birth: string;
  term: boolean;
}
const mockUserData: UserData = {
  email: 'admin@admin.com',
  name: 'admin',
  token: '9124697214798124798',
};

export const handlers = [
  rest.post('/api/user/login', (req, res, ctx) => {
    // Here you can check the credentials and return appropriate responses.
    // For simplicity, this example always returns the same mocked user data.
    return res(
      ctx.status(200),
      ctx.cookie('accessToken', 'abc-123'),
      ctx.json(mockUserData),
    );
  }),
  rest.post('/api/user/signup', (req, res, ctx) => {
    const newUser = {
      email: 'abc@naver.com',
      password: '12345678',
      nickname: '킥킥',
      phonenumber: '010-1234-5689',
      gender: 'male',
      birth: '1998-01-01',
      term: true,
    };
    user.push(newUser);
    return res(ctx.status(200), ctx.json(newUser));
  }),
  rest.get('/api/teams', (req, res, ctx) => {
    return res(ctx.json({ data: teams }));
  }),
];
