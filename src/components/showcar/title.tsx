import ButtonC from '../button';
import Share from '../../assets/icons/share.svg';
// import Like from '../../assets/icons/like.svg';
// import Zoom from '../../assets/icons/ZoomIn.svg';
// import ZoomOut from '../../assets/icons/ZoomOut.svg';
import Interior from '../../assets/icons/interior.svg';

interface TitleCProps {
    // onZoomClick: () => void;
    // isZoomed: boolean;
	onInsideClick?: () => void; // Añadido para manejar el clic en el botón de interior
}


const TitleC = ({ onInsideClick }: TitleCProps) => {
	const handleShare = () => {
		if (navigator.share) {
			navigator
				.share({
					title: 'CHANGAN CS55 PLUS',
					text: 'Descubre el nuevo SUV de Changan',
					url: window.location.href,
				})
				.then(() => console.log('Contenido compartido'))
				.catch((error) => console.error('Error al compartir:', error));
		} else {
			alert('La opción de compartir no está disponible en este navegador.');
		}
	};

	return (
		<>
			<div
				className="flex justify-between"
				style={{
					maxWidth: '85px',
				}}
			>
				<ButtonC
					className="cursor-pointer flex items-center justify-center w-9 h-9 button-blue-changan rounded-full text-white"
					Icon={Share}
					tooltipId="buttonshared"
					tooltipText="Compartir"
					onClick={handleShare}
				/>
				{/* <ButtonC
					className="cursor-pointer  flex items-center justify-center w-9 h-9 button-blue-changan rounded-full text-white"
					Icon={Like}
					tooltipId="buttonlike"
					tooltipText="Me gusta"
				></ButtonC> */}
			</div>
			<h4 className="text-gray-changan open-sans-regular mt-2">CHANGAN SUV</h4>
			<img
			src="/assets/vehicles/cs55plus/logo-cs55.png"
			alt="CHANGAN CS55 PLUS"
			className="max-w-[200px]" // Elimina mt-2 aquí
			/>
			{/* <ButtonC
				className="hidden md:flex cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan  float-right"
				Icon={isZoomed ? ZoomOut : Zoom}
				onClick={onZoomClick}
				classNameIcon="p-2"
				tooltipId="button-zoom"
				tooltipText={isZoomed ? "Reducir imagen" : "Ampliar imagen"}
			></ButtonC> */}
			<ButtonC
				className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan float-right"
				Icon={Interior}
				classNameIcon="p-2"
				tooltipId="buttoninside"
				tooltipText="Entrar al vehículo"
				onClick={onInsideClick}
			/>
		</>
	);
};

export default TitleC;
