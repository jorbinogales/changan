import React from 'react';
import NavbarC from '../components/navbar';
import FooterC from '../components/footer/footer';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
	<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
		<NavbarC />
		<main className="mb-[5vh]">{children}</main>
		<FooterC />
	</div>
);

export default Layout;
