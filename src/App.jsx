import { useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";

function App() {
	const [videoId, setVideoId] = useState(
		'09b83cef-b909-4807-9f08-8696c5a05a6f'
	);
	return (
		<>
			<Toaster />
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 space-y-9">
				<h1 className="text-6xl font-medium text-gray-100 text-center">
					Welcome to Video Streaming App
				</h1>
				<div className="flex mt-14 w-full justify-around ">
					<div>
						<h1 className="text-white">Playing Video</h1>
						<video
							src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
							controls
							autoPlay
							muted
							width="600"
						/>
					</div>
					
						<VideoUpload />
				</div>
			</div>
		</>
	);
}

export default App;
