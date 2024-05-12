'use client';

import { loginAction, signupAction } from '@/actions/users';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import Link from 'next/link';

const AuthPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authParam: number = Number(searchParams.get('login'));

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [isPending, startTransition] = useTransition();
  const handleClickLoginButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        router.push('/');
      }
    });
  };

  const handleClickSignupButton = (formData: FormData) => {
    if (password === confirmPassword) {
      startTransition(async () => {
        const { errorMessage } = await signupAction(formData);
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          router.push('/');
        }
      });
    } else {
      console.log("Passwords don't match!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col p-4 relative items-center bg-slate-100 w-[500px] h-[300px] rounded-lg border-2 border-black">
        <h1 className="font-bold text-xl mb-10">
          {authParam ? 'Login' : 'Signup'}
        </h1>
        <form
          action={authParam ? handleClickLoginButton : handleClickSignupButton}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            disabled={isPending}
            className="rounded-lg p-2 text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isPending}
            className="rounded-lg p-2 text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!authParam && (
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              disabled={isPending}
              className="rounded-lg p-2 text-black"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <div className="flex justify-between">
            <button
              className="p-2 bg-blue-600 rounded-md text-white"
              disabled={isPending}
            >
              {authParam
                ? isPending
                  ? 'Logging in...'
                  : 'Log in'
                : isPending
                  ? 'Signing un...'
                  : 'Sign up'}
            </button>
            <Link
              href={'/'}
              className={`p-2 bg-cyan-200 rounded-md text-black ${isPending ? 'pointer-events-none' : ''}`}
              aria-disabled={isPending}
              tabIndex={isPending ? -1 : undefined}
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
