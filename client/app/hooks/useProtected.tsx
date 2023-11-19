import { redirect } from "next/navigation";
import userAuth from "./userAuth";

interface ProtectedProps {
	children: React.ReactNode;
}

export default function Protected({ children }: ProtectedProps) {
	const isAuthenticated = userAuth();

	console.log("isAuthenticated", isAuthenticated);

	return isAuthenticated ? children : redirect("/");
}
