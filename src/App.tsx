import "./App.css";
import SignUpForm from "./components/SignUpForm";
import img from "./assets/Businessman_launching_business_startup_3D_Illustrationrocket__2_-removebg-preview.png";
import img2 from "./assets/Component_1-removebg-preview.png";
import img3 from "./assets/Component_1boxed-removebg-preview.png";
import img4 from "./assets/Component_2-removebg-preview.png";

function App() {
	return (
		<>
			<div className="flex items-stretch min-h-screen">
				<aside className="w-1/2 max-w-xl bg-purple-800 text-center text-white flex flex-col justify-center items-center gap-4 p-4 max-md:hidden">
					<img
						className="animate-fly w-[80%]"
						src={img}
						alt="Animated man flying on rocket"
					/>
					<p className="font-semibold text-3xl">
						Join us as we explore the future
					</p>
					<p>The future is here.</p>
				</aside>
				<main className="relative flex-grow bg-gradient-to-b from-white to-purple-300 z-10 overflow-hidden flex items-center">
					<img
						className="absolute w-full bottom-0 opacity-15"
						src={img2}
						alt="Dotted image"
					/>
					<img
						className="h-10 absolute top-6 left-6 -z-10"
						src={img3}
						alt=""
					/>
					<img
						className="-z-10 h-10 absolute bottom-6 right-6"
						src={img3}
						alt=""
					/>
					<img
						className="-z-10 absolute -top-12 -right-12 opacity-75"
						src={img4}
						alt=""
					/>
					<SignUpForm />
				</main>
			</div>
		</>
	);
}

export default App;
