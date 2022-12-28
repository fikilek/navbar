import React from "react";
import { Tooltip } from "react-tippy";
import "./MenuBtn.css";

const MenuBtn = ({ menuName, icon }) => {
	const { name, abr } = menuName;
	return (
		<a href="#">
			{/* <Tooltip
				// title={name}
				size={"big"}
				position="left"
				distance={20}
				arrow={true}
				html={
					<div style={{ color: "violet", fontSize: 20 }} className='tool-tip'>
						<strong className="tootip-content"  >{name}</strong>
					</div>
				}
			> */}
				<div className="menu-btn">
					<div className="icon">{icon}</div>
					<div className="abr">{abr}</div>
				</div>
			{/* </Tooltip> */}
		</a>
	);
};

export default MenuBtn;
