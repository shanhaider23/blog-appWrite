import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust the path based on your folder structure

function Logo({ width = '100px', alt = 'Logo' }) {
	return (
		<div>
			<img src={logoImage} alt={alt} style={{ width }} />
		</div>
	);
}

export default Logo;
