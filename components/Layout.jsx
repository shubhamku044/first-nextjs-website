import styles from './../styles/Layout.module.css';
import Header from './Header';
import Navbar from './Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
