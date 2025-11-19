"use client";

import { login } from "@/app/lib/actions/auth";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" id="email" name="email" placeholder="Email" />
        {state?.errors?.email && (
          <p className="text-error">{state.errors.email}</p>
        )}

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          id="password"
          name="password"
          type="password"
        />
        {state?.errors?.password && (
          <p className="text-error">{state.errors.password}</p>
        )}
        <button
          className="btn btn-primary mt-4"
          disabled={pending}
          type="submit"
        >
          Login
        </button>
      </fieldset>
    </form>
  );
}
