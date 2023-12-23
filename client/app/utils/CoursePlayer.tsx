import axios from "axios";
import React, { FC, useEffect, useState } from "react";

type Props = {
	videoUrl: string;
	title: string;
};
// 1XJyAQaM28RFkhA85K26JtxlRHHdrS1L8m1G4TzKWbpDEOOlyNJ1ecDIvtvnaDs9
const CoursePlayer: FC<Props> = ({ videoUrl, title }: Props) => {
	const [videoData, setVideoData] = useState({
		otp: "",
		playbackInfo: "",
	});

	useEffect(() => {
		axios
			.post(`http://localhost:8000/api/v1/getVdoCipherOTP`, {
				videoId: videoUrl,
			})
			.then((res) => {
				setVideoData(res.data);
			});
	}, [videoUrl]);

	return (
		<>
			<div
				style={{
					position: "relative",
					paddingTop: "56.25%",
					overflow: "hidden",
				}}
			>
				{videoData.otp && videoData.playbackInfo !== "" && (
					<iframe
						src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=hSlmx94FI6RV6VnL`}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							border: 0,
						}}
						allowFullScreen={true}
						allow="encrypted-media"
					></iframe>
				)}
			</div>
		</>
	);
};

export default CoursePlayer;
