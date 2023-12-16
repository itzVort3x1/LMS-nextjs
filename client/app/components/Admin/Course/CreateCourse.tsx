"use client";

import React, { useState } from "react";

type Props = {};

const CreateCourse = (props: Props) => {
	const [active, setActive] = useState(0);
	const [courseInfo, setCourseInfo] = useState({
		name: "",
		description: "",
		price: "",
		estimatedPrice: "",
		tags: "",
		level: "",
		categories: "",
		demoUrl: "",
		thumbnail: "",
	});
	const [benefits, setBenefits] = useState([{ title: "" }]);
	const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
	const [courseContentData, setCourseContentData] = useState([
		{
			videoUrl: "",
			title: "",
			description: "",
			videoSection: "Untitled Section",
			videoLength: "",
			links: [
				{
					title: "",
					url: "",
				},
			],
			suggestion: "",
		},
	]);
	const [courseData, setCourseData] = useState({});

	return <div className="w-full flex min-h-screen"></div>;
};

export default CreateCourse;
