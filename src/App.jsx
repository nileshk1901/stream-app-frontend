import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Toaster/>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 space-y-9">
				<h1 className="text-2xl font-medium text-gray-100 text-center">
					Welcome to Video Streaming App
				</h1>
				{/* Wrapper for centering VideoUpload */}
				<div className="flex justify-center items-center w-full">
					<VideoUpload />
				</div>
			</div>
		</>
	);
}

export default App;
