import React from 'react';

const Navbar = () => {
	return (
		<nav style={styles.navbar}>
			<div style={styles.brand}>Iniciar Bootstrap</div>
			<ul style={styles.navList}>
				<li style={styles.navItem}><a href="#" style={styles.navLink} className="active">Inicio</a></li>
				<li style={styles.navItem}><a href="#" style={styles.navLink}>Acerca de</a></li>
				<li style={styles.navItem}><a href="#" style={styles.navLink}>Servicios</a></li>
				<li style={styles.navItem}><a href="#" style={styles.navLink}>Contacto</a></li>
			</ul>
		</nav>
	);
}



const styles = {
	navbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1rem 2rem',
		backgroundColor: '#343a40',
		color: 'white'
	},
	brand: {
		fontSize: '1.25rem',
		fontWeight: 'bold'
	},
	navList: {
		display: 'flex',
		listStyle: 'none',
		gap: '1rem',
		margin: 0,
		padding: 0
	},
	navItem: {},
	navLink: {
		color: 'white',
		textDecoration: 'none'
	}
};

export default Navbar;