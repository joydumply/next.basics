'use client';
import { useRouter, usePathname } from 'next/navigation';

const CarPage = ({ params }: { params: { id: string } }) => {
	const router = useRouter();

	const pathname = usePathname();
	// console.log(params); // getting [id];
	// console.log(router, pathname);

	return (
		<div>
			<button onClick={() => router.push('/')}>Go Home</button>
			{/* router.push - changes page */}

			<button onClick={() => router.replace('/')}>Go Home with no return</button>
			{/* as it says - no return (back button disables) */}
		</div>
	);
};

export default CarPage;
