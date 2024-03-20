"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      <p className="text-lg">
        {user ? (
          <>
            <p>
              Signed in as {user && user.displayName} ({user?.email})
            </p>
            <button onClick={firebaseSignOut}>Sign out</button>
            <br />
            <Link href="./week-8/shopping-list">
              Continue to your Shopping List
            </Link>
          </>
        ) : (
          <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        )}
      </p>
    </div>
  );
}
