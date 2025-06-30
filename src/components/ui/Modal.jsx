import { createPortal } from "react-dom"

export const Modal = ({children, onClose}) => {
	useEffect( () => {
		const handleEsc = e => {
			if (e.key === 'Escape') onClose()
		}

		window.addEventListener('keydown', handleEsc)

		return () => window.removeEventListener('keydown', handleEsc) 
	}, [onClose])

	return createPortal(
		<div className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flkex items-center justify-center'>
			<div className='relative w-[90%] max-w-xl bg-neutral-900 text-whit p-6 rounded-2xl shadow-lg animate-fadeIn'>
				<button
					onClick={() => console.log()}
					className='absolute top-3 right-3 text-white text-xl hover:text-red-600 transition'
					aria-label='Close modal'
				>
					❌
				</button>
				<div className='flex justify-center items-center'>{children}</div>				
			</div>
		</div>,
		document.body
	)
}
