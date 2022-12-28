import React from "react";
import "./Header.css";
import { AiFillDashboard, AiFillCaretDown } from "react-icons/ai";
import { TbFilePower } from "react-icons/tb";
import { FaRubleSign } from "react-icons/fa";
import MenuBtn from "./MenuBtn";
import MenuAvatar from "./MenuAvatar";
import { Tooltip } from "react-tippy";
import Submenu from "./Submenu";
import SubmenuAdmin from "./SubmenuAdmin";
import SubmenuUser from "./SubmenuUser";
import SubmenuTrns from "./SubmenuTrns";

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
						<AiFillCaretDown />
						<Submenu />
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Assets", abr: "Asts" }}
							user={user}
						/>
						<AiFillCaretDown />
						<Submenu />
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Transactions", abr: "Trns" }}
						/>
						<AiFillCaretDown />
						<SubmenuTrns />
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Erfs", abr: "Erfs" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<TbFilePower />}
							menuName={{ name: "Body of Knowledge", abr: "Bok" }}
						/>
					</li>
				</ul>

				<ul className="main-menu main-menu-right ml1">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Admin", abr: "Admin" }}
						/>
						<AiFillCaretDown />
						<SubmenuAdmin />
					</li>
					<li>
						<MenuAvatar user={{ surname: "Kentane", name: "Fikile" }} />
						<AiFillCaretDown />
						<SubmenuUser />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
