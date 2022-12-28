import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import MenuBtn from "./MenuBtn";

const SubSubmenuTrns = () => {
	return (
		<>
			<ul className="sub-menu sub-sub-menu sub-menu-left ml3">
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Disconections", abr: "Disconections" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Reconnections", abr: "Reconnections" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Installations", abr: "Installations" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Commissioning", abr: "Commissioning" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Decommissioning", abr: "Decommissioning" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Vending", abr: "Vending" }}
					/>
				</li>
			</ul>
		</>
	);
};

export default SubSubmenuTrns;
