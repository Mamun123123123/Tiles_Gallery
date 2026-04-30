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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Login Successful");
      router.push("/");
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
      <Card className="w-full max-w-sm sm:max-w-md border py-8 px-5 sm:px-6 shadow-xl rounded-2xl">

        <h1 className="text-center text-xl sm:text-2xl font-bold mb-5">
          Login to Your Account
        </h1>

        <Form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >

          <TextField isRequired>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
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
              })}
            />

            <Description className="text-xs sm:text-sm">
              Enter your account password
            </Description>

            <FieldError>{errors.password?.message}</FieldError>
          </TextField>

          <Button type="submit" className="w-full bg-indigo-600 text-white">
            <Check />
            Login
          </Button>

          <p className="text-xs sm:text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </Form>

        <div className="flex items-center gap-3 my-5">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-xs sm:text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <Button
          onClick={handleGoogleLogin}
          variant="bordered"
          className="w-full flex items-center justify-center gap-2"
        >
          <GrGoogle />
          Continue with Google
        </Button>

      </Card>
    </div>
  );
}