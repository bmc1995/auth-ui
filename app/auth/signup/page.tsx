import SignUpForm from "@/app/lib/components/signupForm";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main>
        <SignUpForm />
        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <a className="text-accent" href="./login">
            Get you logged in!
          </a>
        </p>
      </main>
    </div>
  );
}
