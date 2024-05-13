'use client';
import React, { useTransition } from 'react';
import { signOutAction } from '@/actions/users';

const SignOutButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = async () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return (
    <button
      className="p-2 bg-blue-600 rounded-md text-white"
      onClick={handleClickSignOutButton}
      disabled={isPending}
    >
      {isPending ? 'Signing Out...' : 'Sign Out'}
    </button>
  );
};

export default SignOutButton;
