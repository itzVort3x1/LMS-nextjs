import userModel from "../models/user.model";
import { Response } from "express";
import { redis } from "../utils/redis";

export const getUserById = async (id: string, res: Response) => {
	const userJson = await redis.get(id);

	if (userJson) {
		const user = JSON.parse(userJson);
		res.status(201).json({
			succcess: true,
			user,
		});
	}
};

export const getAllUsersService = async (res: Response) => {
	const usersJson = await userModel.find().sort({ createdAt: -1 });
	res.status(201).json({
		success: true,
		users: usersJson,
	});
};

export const updateUserRoleService = async (
	res: Response,
	id: string,
	role: string
) => {
	const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
	res.status(201).json({
		success: true,
		user,
	});
};
