import headerStyles from '../styles/Header.module.css';

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>WebDev</span>&nbsp;News
			</h1>
			<p className={headerStyles.description}>
				Keep up to date with latest tech and web development news.
			</p>
		</div>
	);
};

export default Header;
