import { FormEvent, useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";

const SignUpForm = () => {
	const {
		formState: { errors, isValid },
		register,
		setError,
		getValues,
		reset,
		trigger,
	} = useForm({ mode: "onBlur" });

	const [submitting, setSubmitting] = useState(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await trigger();
		if (isValid) {
			const values = getValues();
			if (values.password !== values.cpassword)
				return setError("cpassword", {
					message: "Password confirmation does not match password",
				});
			setSubmitting(true);
			setTimeout(() => {
				setSubmitting(false);
				reset();
			}, 5000);
		}
	}

	return (
		<div className="w-full space-y-4 pX-4 py-12 px-4 z-50">
			<h1 className="font-bold text-6xl text-center text-purple-800">
				Register Now!
			</h1>
			<h2 className="font-semibold text-center text-purple-800 text-2xl">
				Please fill in the information carefully
			</h2>
			<form
				onSubmit={handleSubmit}
				className="bg-purple-50 shadow-md max-w-3xl mx-auto rounded-md overflow-hidden px-4 py-14 space-y-8"
			>
				<Input
					type="text"
					id="fname"
					name="firstName"
					required
					register={register}
					errors={errors}
					label="First name"
					pattern={/^[\w'\-]{2,}$/}
				/>
				<Input
					type="text"
					id="lname"
					name="lastName"
					required
					register={register}
					errors={errors}
					label="Last name"
					pattern={/^[\w'\-]{2,}$/}
				/>
				<Input
					type="email"
					id="email"
					name="email"
					required
					register={register}
					errors={errors}
					label="Email"
					errorMsg="Please enter a valid email"
					pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
				/>
				<Input
					type="text"
					id="phone-number"
					name="phoneNumber"
					required
					register={register}
					errors={errors}
					label="Phone number"
					pattern={/^[\d\+\-]{6,32}$/}
				/>
				<Input
					type="password"
					id="password"
					name="password"
					required
					register={register}
					errors={errors}
					label="Password"
					pattern={
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/
					}
					errorMsg="Password must contain 1 uppercase, 1 lowercase and 1 special character. E.g. P@ssw0rd"
				/>
				<Input
					type="password"
					id="cpassword"
					name="cpassword"
					required
					register={register}
					errors={errors}
					label="Confirm Password"
					errorMsg="Password confirmation must match password"
				/>
				<button
					disabled={submitting}
					className="w-full flex justify-center max-w-52 rounded-sm bg-purple-800 text-white p-2 float-right disabled:opacity-65 active:scale-x-95"
				>
					{submitting ? <CgSpinner className="animate-spin" /> : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
