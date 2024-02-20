import { NextPage, Metadata } from 'next';
import Image from 'next/image';

interface Props {}

// * Static metadata 

export const metadata: Metadata = {
	title: 'Not Found!',
	description: 'Oops. Something went wrong',
};

const NotFound: NextPage<Props> = ({}) => {
	return (
		<div className="not-found-wrap">
			<Image
				src="/404.png"
				alt="404"
				width={450}
				height={433}
			/>
		</div>
	);
};

export default NotFound;
