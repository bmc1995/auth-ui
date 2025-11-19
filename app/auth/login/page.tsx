import LoginForm from "@/app/lib/components/loginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="">
        <LoginForm></LoginForm>
        <p>
          Not registered? <a href="./signup">Create an account!</a>
        </p>
      </main>
    </div>
  );
}
