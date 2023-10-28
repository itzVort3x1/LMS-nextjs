"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
	return (
		<div>
			<Heading
				title="LMS"
				description="Elearning is a platform for students to learn and get help from teachers"
				keywords="Programmings, MERN, REDUX"
			/>
			<Header />
		</div>
	);
};

export default Page;
