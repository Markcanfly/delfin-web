"use client";

import { loginAction } from "@/actions/users";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const handleClickLoginButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        router.push("/");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col p-4 relative items-center bg-slate-100 w-[500px] h-[300px] rounded-lg border-2 border-black">
        <h1 className="font-bold text-xl mb-10">Login</h1>
        <form action={handleClickLoginButton} className="flex flex-col gap-4">
          <input type="text" name="email" placeholder="Email" disabled={isPending} className="rounded-lg p-2 text-black" />
          <input type="password" name="password" placeholder="Password" disabled={isPending} className="rounded-lg p-2 text-black" />
          <div className="flex justify-between bottom-4 ">
            <button className="p-2 bg-blue-600 rounded-md text-white" disabled={isPending}>
              {isPending ? "Logging in..." : "Log in"}
            </button>
            <Link href={"/"} className={`p-2 bg-cyan-200 rounded-md text-black ${isPending ? "pointer-events-none" : ""}`} aria-disabled={isPending} tabIndex={isPending ? -1 : undefined}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
