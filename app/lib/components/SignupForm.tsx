"use client";

import { signup } from "@/app/lib/actions/auth";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label" htmlFor="name">
          Name
        </label>
        <input className="input" id="name" name="name" placeholder="Name" />
        {state?.errors?.name && (
          <p className="text-error">{state.errors.name}</p>
        )}

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
          <div className="text-error">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="btn btn-primary mt-4"
          disabled={pending}
          type="submit"
        >
          Sign Up
        </button>
      </fieldset>
    </form>
  );
}
