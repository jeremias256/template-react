import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Page1 = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-blue-500 text-white'>
			<h1 className='text-3xl font-bold text-red-700'>
				Hello, Tailwind with CLI!
			</h1>
			<FontAwesomeIcon
				icon={faCoffee}
				size='2x'
				beat
			/>
			<div className='flex flex-col'>
				<p className='font-nunito'>
					Whereas disregard and contempt for human rights have resulted
				</p>
				<p className='font-lato'>
					Whereas disregard and contempt for human rights have resulted
				</p>
				<p className='font-figtree'>
					Whereas disregard and contempt for human rights have resulted
				</p>
				<p className='font-inter'>
					Whereas disregard and contempt for human rights have resulted
				</p>
			</div>
		</div>
	);
};
