import { FC, PropsWithChildren } from 'react';
import Header from '../_components/header/header';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			{/* Layout for Car Page and Nested Pages */}
			{children}
		</div>
	);
};

export default Layout;
