"use client";
import React from "react";
import AdminSideBar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import CreateCourse from "../../components/Admin/Course/CreateCourse";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<Heading
				title="Elearning - Admin"
				description="ELearning is a platform for students to learn and get help from teachers"
				keywords="Programming,MERN,Redux,Machine Learning"
			/>
			<div className="flex min-h-screen">
				<div className="1500px:w-[16%] w-1/5">
					<AdminSideBar />
				</div>
				<div className="w-[84%]">
					<DashboardHeader />
					<CreateCourse />
				</div>
			</div>
		</div>
	);
};

export default page;
