import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <>
      <form className="box flex column" onSubmit={handleSubmit(onSubmit)}>
        <h2>form1</h2>
        <br />
        <p>Email</p>
        <input
          className="box"
          name="email"
          ref={register({
            required: "必須です！",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        <p>{errors.email && errors.email.message}</p>
        <p>Your Name</p>
        <input
          className="box"
          name="username"
          ref={register({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        <p>{errors.username && errors.username.message}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
