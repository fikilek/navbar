import React from "react";
import "./MenuAvatar.css";

const MenuAvatar = ({ user }) => {
  const { name, surname } = user
  const getInitials = (name, surname) => {
    return "FK"
  }
	return (
		<div className="menu-avatar">
			<button className="initials">{getInitials(surname, name)}</button>
		</div>
	);
};

export default MenuAvatar;
