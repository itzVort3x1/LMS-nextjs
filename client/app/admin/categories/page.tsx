"use client";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSideBar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import EditCategories from "../../../app/components/Admin/Customization/EditCategories";

type Props = {};

const page = ({ params }: any) => {
	const id = params?.id;

	return (
		<div>
			<AdminProtected>
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
						<DashboardHero />
						<EditCategories />
					</div>
				</div>
			</AdminProtected>
		</div>
	);
};

export default page;
