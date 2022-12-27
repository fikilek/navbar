import React from 'react'
import { AiFillDashboard } from 'react-icons/ai';
import MenuBtn from './MenuBtn';

const SubmenuMl2 = () => {
  return (
			<>
				<ul className="sub-menu sub-menu-left ml2">
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Feeders", abr: "Fdrs" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Transformers", abr: "Trfs" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Poles", abr: "Pls" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Boxes", abr: "Bxs" }}
						/>
					</li>
					<li>
						<MenuBtn
							icon={<AiFillDashboard />}
							menuName={{ name: "Meters", abr: "Mtrs" }}
						/>
					</li>
				</ul>
			</>
		);
}

export default SubmenuMl2