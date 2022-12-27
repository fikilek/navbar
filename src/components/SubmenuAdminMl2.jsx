import React from 'react'
import "./SubmenuAdminMl2.css";
import { AiFillDashboard } from 'react-icons/ai';
import MenuBtn from './MenuBtn';

const SubmenuAdminMl2 = () => {
  return (
			<>
				<ul className="sub-menu sub-menu-right sub-menu-admin ">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Users", abr: "Users" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "System Tables", abr: "Syst" }}
						/>
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
}

export default SubmenuAdminMl2