'use client';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.css';
import { useRouter, usePathname } from 'next/navigation';

const Header: FC = () => {
	const pathname = usePathname();
	const router = useRouter();
	console.log(pathname);

	/**
	 * TODO Insert Header into main Layout, and make Active Class for Active Links
	 *
	 */

	return (
		<header className={styles.header}>
			<Link href="/">Home</Link>
			<Link href="/about-us">About</Link>
		</header>
	);
};

export default Header;
