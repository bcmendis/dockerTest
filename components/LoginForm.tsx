'use client'

import Image from 'next/image';
import { useForm, SubmitHandler} from 'react-hook-form'
import formImage from '@/public/laser.jpg'

type FormValues = {
  email: string,
  password: string
}

let renderCount = 0;

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'all'
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  console.log('errors', errors);
  console.log(Object.keys(errors))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white flex rounded-lg w-1/2 border-gray-500 shadow-lg"
    >
      <section className="flex-1 text-gray-700 p-20">
        <h1 className="text-3xl pb-2 font-bold">Login</h1>
        {/* Email field */}
        <div className="mt-6">
          <label
            htmlFor="username"
            className={`block text-sm pb-2 ${
              errors.email ? "text-red-500 font-bold" : ""
            }`}
          >
            {errors.email ? errors.email?.message : "Email"}
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter your email"
            className={`border-2 p-2 rounded-md w-full focus:outline-none ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-500 focus:border-purple-500 focus:ring-purple-500"
            }`}
          />
        </div>
        {/* Password field */}
        <div className="mt-6">
          <label
            htmlFor="password"
            className={`block text-sm pb-2 ${
              errors.password ? "text-red-500 font-bold" : ""
            }`}
          >
            {errors.password ? errors.password?.message : "Password"}
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Enter your password"
            className={`border-2 p-2 rounded-md w-full focus:outline-none ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-500 focus:border-purple-500 focus:ring-purple-500"
            }`}
          />
        </div>
        {/* Login checkbox */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <input
            type="checkbox"
            id="checkbox"
            value="checked"
            className="h-5 w-5 rounded-full outline-none text-purple-500 focus:ring-transparent focus:outline-none"
          />
          <label htmlFor="checkbox" className="">
            Keep me logged in
          </label>
        </div>
        <div className="flex w-full gap-2 item-center justify-center mt-6">
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className={`flex-1  text-sm text-white py-3 rounded-lg ${
              Object.keys(errors).length === 0
                ? "bg-purple-500 hover:scale-105 ease-in-out"
                : "bg-purple-500/50"
            }`}
          >
            Login
          </button>
          <button className="flex-1 text-purple-500 font-bold hover:scale-105 ease-in-out">
            Cancel
          </button>
        </div>
      </section>
      <section className="flex-1 relative">
        <Image
          src={formImage}
          alt="loginImage"
          priority
          fill
          sizes="25vw"
          className="object-cover rounded-lg brightness-75"
        />
      </section>
    </form>
  );
};

export default LoginForm;
