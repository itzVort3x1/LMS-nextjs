import NotificationModel from "../models/notificationModel";
import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";

// get all notifications -- only admin
export const getNotifications = CatchAsyncError(
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const notifications = await NotificationModel.find().sort({
				createdAt: -1,
			});

			res.status(200).json({
				success: true,
				notifications,
			});
		} catch (error: any) {
			return next(new ErrorHandler(error.message, 500));
		}
	}
);
