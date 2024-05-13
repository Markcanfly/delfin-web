import React from 'react';
import Link from 'next/link';

const CallbackPage = () => {
  return (
    <>
      <h1>Signup Successful!</h1>
      <Link href={'/'} className={'p-2 bg-cyan-200 rounded-md text-black'}>
        Back to Home
      </Link>
    </>
  );
};

export default CallbackPage;
