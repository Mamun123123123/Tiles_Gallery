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
      toast.success("Registration Successful ");
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
    <Card className="border mx-auto w-full max-w-md py-10 mt-10 px-6 shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-4">
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
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                  /[A-Z]/.test(value) ||
                  "Must contain uppercase",
                hasNumber: (value) =>
                  /[0-9]/.test(value) ||
                  "Must contain number",
              },
            })}
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError>{errors.password?.message}</FieldError>
        </TextField>

        <Button type="submit" className="w-full">
          <Check /> Register
        </Button>
      </Form>

    
      <div className="divider my-4">OR</div>

  
      <Button
        onClick={handleGoogleLogin}
        variant="bordered"
        className="w-full"
      >
        Continue with Google
      </Button>

  
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary font-medium">
          Login
        </Link>
      </p>
    </Card>
  );
}