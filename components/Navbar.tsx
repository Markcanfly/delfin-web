'use client';

import React from 'react';
import Link from 'next/link';
import SignOutButton from '@/components/SignOutButton';
import { User } from '@supabase/supabase-js';

const Navbar = ({ user }: { user: User | null }) => {
  return (
    <>
      <nav className="flex justify-between p-2 bg-slate-800">
        <div className="flex items-center text-[2rem] text-white">DELFIN</div>
        <div className="flex">
          {user ? (
            <>
              <p className="flex items-center jusitfy-center p-2 mr-10 text-white">
                {user.email}
              </p>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href="/auth-page?login=1"
                className="flex items-center jusitfy-center p-2 mr-10 bg-cyan-200 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/auth-page?login=0"
                className="flex items-center jusitfy-center p-2 bg-blue-600 rounded-md text-white"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
