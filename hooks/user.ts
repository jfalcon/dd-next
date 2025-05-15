'use client';

import { useState } from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////////

// eventually this could contain an user object we parse, for now it's just a string
export const useUser = () => {
  // can also use localStorage to persist the login, for the demo we keep it session-based
  const [user, setUserInternal] = useState(() => {
    // note, use Buffer.from(data, 'base64') instead of atob for server-side code
    return window.atob(sessionStorage.getItem('user') ?? '');
  });

  // note, use data.toString('base64') instead of btoa for server-side code
  const setUser = (newUser: string) => {
    sessionStorage.setItem('user', window.btoa(newUser));
    setUserInternal(newUser);
  };

  // this is so not secure, but it's a demo
  return [user, setUser];
};

////////////////////////////////////////////////////////////////////////////////////////////////////
