import React from "react";
import videoLogo from "../assets/upload.png";
import { Button, Card } from "flowbite-react";

function VideoUpload() {
	return (
		<div >
			<Card className="flex flex-col items-center justify-center">
				<h1>Upload Videos</h1>
				<div>
					<form className="flex  items-center space-x-6">
						<div className="shrink-0">
							<img
								className="h-16 w-16 object-cover"
								src={videoLogo}
								alt="Upload icon"
							/>
						</div>
						<label className="block">
							<span className="sr-only">Choose video file</span>
							<input
								type="file"
								className="block w-full text-sm text-gray-500
								 file:mr-4 file:py-2 file:px-4
								 file:rounded-md file:border-0
								 file:text-sm file:font-semibold
								 file:bg-violet-600 file:text-white
								 hover:file:bg-violet-700 cursor-pointer"
							/>
						</label>
					</form>
					<Button className="w-full bg-violet-600 hover:bg-violet-700">
						Upload
					</Button>
				</div>
			</Card>
		</div>
	);
}

export default VideoUpload;
