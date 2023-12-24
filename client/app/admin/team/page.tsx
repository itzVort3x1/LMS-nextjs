"use client";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSideBar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AllUsers from "../../components/Admin/Users/AllUsers";

type Props = {};

const page = (props: Props) => {
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
						<AllUsers isTeam={true} />
					</div>
				</div>
			</AdminProtected>
		</div>
	);
};

export default page;
