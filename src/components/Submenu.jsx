import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import MenuBtn from "./MenuBtn";

const Submenu = () => {
	return (
		<>
			<ul className="sub-menu sub-menu-left ml2">
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Feeders", abr: "Feeders" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Transformers", abr: "Transformers" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Poles", abr: "Poles" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Boxes", abr: "Boxes" }}
					/>
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Meters", abr: "Meters" }}
					/>
				</li>
			</ul>
		</>
	);
};

export default Submenu;
