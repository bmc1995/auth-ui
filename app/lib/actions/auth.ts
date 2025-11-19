import {
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
  SignUpFormState,
} from "@/app/lib/definitions";

export async function signup(state: SignUpFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  // 3. Insert user into database — send plain password; server will hash it.
  const response = await fetch("http://localhost:8081/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });

  const user = response.user;

  if (!response.user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  console.log("User created successfully:", user);

  // TODO:
  // 4. Create user session
  // 5. Redirect user
}

export async function login(state: LoginFormState, formData: FormData) {
  //Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const response = await fetch("http://localhost:8081/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });

  const user = response.user;

  if (!response.user) {
    return {
      message: "Invalid email or password.",
    };
  }
  console.log("User logged in successfully:", user);
  // TODO:
  // 4. Create user session
  // 5. Redirect user
}
