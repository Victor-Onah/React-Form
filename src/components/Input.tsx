import { HTMLAttributes, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const Input = (
	props: HTMLAttributes<HTMLInputElement> & {
		type: "email" | "text" | "password" | "number";
		name: string;
		label: string;
		pattern?: RegExp;
		required?: boolean;
		errorMsg?: string;
		register: UseFormRegister<FieldValues>;
		errors: FieldErrors<FieldValues>;
	}
) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	return (
		<div className="relative">
			<input
				id={props.id}
				type={props.type}
				className="block w-full min-w-0 p-2 bg-purple-100 focus:border-b-2 valid:border-b-2 outline-none border-purple-800 text-purple-800"
				required={props.required}
				{...props.register(props.name, {
					required: {
						message: "This field cannot be empty",
						value: props.required || false,
					},
					pattern: {
						value: new RegExp(props.pattern as RegExp) || new RegExp(""),
						message: props.errorMsg || "Please enter a correct value",
					},
				})}
			/>
			<label
				className="absolute top-2 left-2 text-purple-300"
				htmlFor={props.id}
			>
				{props.label}
			</label>
			{props.type === "password" && (
				<button
					type="button"
					className="absolute top-3 right-2 active:scale-95"
					title={isPasswordVisible ? "Hide password" : "Show password"}
					onClick={() => setIsPasswordVisible(!isPasswordVisible)}
				>
					{isPasswordVisible ? <GoEyeClosed /> : <RxEyeOpen />}
				</button>
			)}
			{props.errors[props.name] && (
				<small className="text-red-500">
					{props.errors[props.name]?.message as string}
				</small>
			)}
		</div>
	);
};

export default Input;
