import React from 'react'
import "./SubmenuUser.css";
import { AiFillDashboard } from 'react-icons/ai';
import MenuBtn from './MenuBtn';
import Signout from './Signout'

const SubmenuUser = () => {
  return (
			<>
				<ul className="sub-menu sub-menu-right sub-menu-user">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "User Profile", abr: "user" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Signout", abr: "Logout" }}
						/>
					</li>
				</ul>
			</>
		);
}

export default SubmenuUser