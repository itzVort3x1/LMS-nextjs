import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/order.model";

export const newOrder = CatchAsyncError(
	async (data: any, res: Response, next: NextFunction) => {
		const order = await OrderModel.create(data);
		res.status(201).json({
			success: true,
			order,
		});
	}
);

export const getAllOrdersServices = async (res: Response) => {
	const ordersJson = await OrderModel.find().sort({ createdAt: -1 });
	res.status(201).json({
		success: true,
		orders: ordersJson,
	});
};
