'use client'

import Image from 'next/image';
import { useForm, SubmitHandler} from 'react-hook-form'
import formImage from '@/public/laser.jpg'
import FormInput from './UI/FormInput';

type FormValues = {
  email: string,
  password: string
}


// Email validation Regular Expression as per W3C specification
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginForm = () => {
  // Initializing React-Hook-Form
  const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'all'
  });

  const emailRegister = {
    ...register("email", {
      required: "Email is required",
      pattern: {
        value: regex,
        message: "Invalid email format",
      },
    }),
  };

  const passwordRegister = {
    ...register("password", {
      required: "Password is required",
    }),
  };

  // Form submit handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Values:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="loginForm">
      <section className="form_section">
        <h1 className="form_header">Login</h1>

        {/* Email field */}
        <FormInput
          id="email"
          label="Email"
          type="email"
          error={!!errors.email}
          errorMessage={errors.email?.message || null}
          register={emailRegister}
        />

        {/* Password field */}
        <FormInput
          id="password"
          label="Password"
          type="password"
          error={!!errors.password}
          errorMessage={errors.password?.message || null}
          register={passwordRegister}
        />

        {/* Login checkbox */}
        <div className="form_checkbox_container">
          <input
            type="checkbox"
            id="checkbox"
            value="checked"
            className="form_checkbox"
          />
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>

        {/* Buttons */}
        <div className="form_button_container">
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className={`form_button_submit ${
              Object.keys(errors).length === 0
                ? "form_button_submit_enabled"
                : "form_button_submit_disabled"
            }`}
          >
            Login
          </button>
          <button className="form_button_cancel">Cancel</button>
        </div>
      </section>

      {/* Image */}
      <section className="form_image_container">
        <Image
          src={formImage}
          alt="loginImage"
          priority
          fill
          sizes="25vw"
          className="form_image"
        />
      </section>
    </form>
  );
};

export default LoginForm;
