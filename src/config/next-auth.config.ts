import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: '아이디를 입력해주세요.',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호를 입력해주세요.',
        },
      },
      authorize: async (credentials, _req) => {
        try {
          if (!credentials?.password || !credentials.username) {
            return null;
          }
          return {
            id: '1',
            name: 'test',
            email: 'test@test.com',
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};
