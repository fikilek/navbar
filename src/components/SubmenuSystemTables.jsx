import React from 'react'
import "./SubmenuSystemTables.css";
import { AiFillDashboard } from 'react-icons/ai';
import MenuBtn from './MenuBtn';

const SubmenuSystemTables = () => {
  return (
			<>
				<ul className="sub-menu sub-menu-right sub-menu-system-tables">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Users", abr: "users" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Asset States", abr: "astst" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Transaction States", abr: "trnst" }}
						/>
					</li>
				</ul>
			</>
		);
}

export default SubmenuSystemTables