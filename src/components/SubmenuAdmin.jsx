import React from "react";
import "./SubmenuAdmin.css";
import { AiFillDashboard, AiFillCaretLeft } from "react-icons/ai";
import MenuBtn from "./MenuBtn";
import SubmenuSystemTables from "./SubmenuSystemTables";

const SubmenuAdmin = () => {
	return (
		<>
			<ul className="sub-menu sub-menu-right sub-menu-admin ">
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Users", abr: "Users" }}
					/>
				</li>
				<li className="sub-menu-admin-system-tables">
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "System Tables", abr: "Syst" }}
					/>
					<SubmenuSystemTables />
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Mobile Devices", abr: "Mdvc" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Simcards", abr: "Smc" }}
					/>
				</li>
			</ul>
		</>
	);
};

export default SubmenuAdmin;
