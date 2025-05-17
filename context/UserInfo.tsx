'use client';

import { createContext } from 'react';
import { useSessionStorage } from '@/hooks';
import type { PropsWithChildren } from 'react';
import type { UserProps } from '@/types';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const emptyUser: UserProps = {
  createdAt: null,
  email: '',
  emailVerified: false,
  id: '',
  image: null,
  isAdmin: false,
  name: '',
  password: '',
  updatedAt: null,
};

export const UserInfoContext = createContext<UserProps>(emptyUser);

////////////////////////////////////////////////////////////////////////////////////////////////////

export const UserInfoProvider = (props: PropsWithChildren) => {
  const [user] = useSessionStorage<UserProps>('user', emptyUser);

  return (
    <UserInfoContext.Provider value={user}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;

////////////////////////////////////////////////////////////////////////////////////////////////////
