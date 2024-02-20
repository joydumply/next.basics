'use client';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import { useRouter, usePathname } from 'next/navigation';

const Header: FC = () => {
	const pathname = usePathname();
	// const router = useRouter();

	return (
		<header className={styles.header}>
			<Link
				href="/"
				className={pathname === '/' ? styles.active : ''}
			>
				Home
			</Link>
			<Link
				href="/about-us"
				className={pathname === '/about-us' ? styles.active : ''}
			>
				About
			</Link>
		</header>
	);
};

export default Header;
