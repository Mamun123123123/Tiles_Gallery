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

export default function SignUpPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data" ,data);
    const { name, email, password, image } = data;
   const { data: res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: image,
    callbackURL: "/",
});
console.log(res,error);
if(error){
  alert(error.message)
}
if(res){
  alert("Sign up Successfully")
  router.push('/signin')
}
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form
        className="flex w-96 mx-auto flex-col gap-4"
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
          <Label>Image URL</Label>
          <Input
            placeholder="Image URL"
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
                message: "Please enter a valid email",
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
                  "Must contain uppercase letter",
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

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}