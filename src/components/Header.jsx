import React from "react";
import "./Header.css";
import { AiFillDashboard } from "react-icons/ai";
import { TbFilePower } from "react-icons/tb";
import { FaRubleSign } from "react-icons/fa";
import MenuBtn from "./MenuBtn";
import MenuAvatar from "./MenuAvatar";
import { Tooltip } from "react-tippy";
import SubmenuMl2 from "./SubmenuMl2";
import SubmenuAdminMl2 from "./SubmenuAdminMl2";
import SubmenuUser from "./SubmenuUser";

const user = {
	name: "Fikile",
	surname: "Kentane",
};

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<FaRubleSign />
			</div>
			<nav>
				<ul className="main-menu main-menu-left ml1">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Dashboard", abr: "Dbd" }}
						/>
						<SubmenuMl2 />
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Assets", abr: "Asts" }}
							user={user}
						/>
						<SubmenuMl2 />
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Transactions", abr: "Trns" }}
						/>
						<SubmenuMl2 />
					</li>
				</ul>

				<ul className="main-menu main-menu-right ml1">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Admin", abr: "Admin" }}
            />
            <SubmenuAdminMl2 />
					</li>
					<li>
						<MenuAvatar user={{ surname: "Kentane", name: "Fikile" }} />
						<SubmenuUser />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
