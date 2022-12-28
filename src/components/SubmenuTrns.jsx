import React from "react";
import { AiFillDashboard, AiFillCaretRight } from "react-icons/ai";
import MenuBtn from "./MenuBtn";
import SubSubmenuTrns from "./SubSubmenuTrns";

const SubmenuTrns = () => {
	return (
		<>
			<ul className="sub-menu sub-menu-left ml2">
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Feeders", abr: "Feeders" }}
					/>
					<AiFillCaretRight />
					<SubSubmenuTrns />
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Transformers", abr: "Transformers" }}
					/>
					<AiFillCaretRight />
					<SubSubmenuTrns />
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Poles", abr: "Poles" }}
					/>
					<AiFillCaretRight />
					<SubSubmenuTrns />
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Boxes", abr: "Boxes" }}
					/>
					<AiFillCaretRight />
					<SubSubmenuTrns />
				</li>
				<li>
					<MenuBtn
						icon={<AiFillDashboard />}
						menuName={{ name: "Meters", abr: "Meters" }}
					/>
					<AiFillCaretRight />
					<SubSubmenuTrns />
				</li>
			</ul>
		</>
	);
};

export default SubmenuTrns;
