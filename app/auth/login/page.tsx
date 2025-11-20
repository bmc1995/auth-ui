import LoginForm from "@/app/lib/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="">
        <LoginForm></LoginForm>
        <p className="mt-3 text-center text-sm">
          Not registered?{" "}
          <a href="./signup" className="text-accent">
            Create an account!
          </a>
        </p>
      </main>
    </div>
  );
}
