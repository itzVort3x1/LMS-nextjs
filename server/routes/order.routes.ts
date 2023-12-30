import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
	createOrder,
	getAllOrders,
	newPayment,
	sendStripeKeyPublishableKey,
} from "../controllers/order.controller";
import { updateAccessToken } from "../controllers/user.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get(
	"/get-orders",
	updateAccessToken,
	isAuthenticated,
	authorizeRoles("admin"),
	getAllOrders
);

orderRouter.get("/payment/stripepublishablekey", sendStripeKeyPublishableKey);

orderRouter.post("/payment", updateAccessToken, isAuthenticated, newPayment);

export default orderRouter;
