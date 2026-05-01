"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, image } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      await authClient.signOut();
      toast.success("Registration Successful");
      router.push("/signin");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-sm sm:max-w-md py-8 px-5 sm:px-6 shadow-xl border rounded-2xl">

        <h1 className="text-center text-xl sm:text-2xl font-bold mb-5">
          Create an Account
        </h1>

        <Form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >

          <TextField isRequired>
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            <FieldError>{errors.name?.message}</FieldError>
          </TextField>

          <TextField isRequired>
            <Label>Photo URL</Label>
            <Input
              placeholder="https://..."
              {...register("image", { required: "Image URL is required" })}
            />
            <FieldError>{errors.image?.message}</FieldError>
          </TextField>

          <TextField isRequired>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            <FieldError>{errors.email?.message}</FieldError>
          </TextField>

          <TextField isRequired>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "At least 8 characters",
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) || "Must contain uppercase",
                  hasNumber: (value) =>
                    /[0-9]/.test(value) || "Must contain number",
                },
              })}
            />

            <Description className="text-xs sm:text-sm">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError>{errors.password?.message}</FieldError>
          </TextField>

          <Button type="submit" className="w-full bg-indigo-600 text-white">
            <Check /> Register
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-5">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-xs sm:text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <Button
          onClick={handleGoogleLogin}
          variant="bordered"
          className="w-full"
        >
          Continue with Google
        </Button>

        <p className="text-center text-xs sm:text-sm mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary font-medium">
            Login
          </Link>
        </p>

      </Card>
    </div>
  );
}