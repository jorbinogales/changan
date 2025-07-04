import { useState } from 'react';
// import ButtonC from '../button';
import './footer.css';

// import Interior from '../../assets/icons/interior.svg';

const colorOptions = [
	{ name: 'white', code: '#ffff' },
	{ name: 'black', code: '#111111' }
];

type DownButtonsCProps = {
	onColorChange: (colorName: string) => void;
	// onInsideClick: () => void; 
};

const DownButtonsC = ({ onColorChange }: DownButtonsCProps) => {
	const [activeColor, setActiveColor] = useState(colorOptions[0]);

	const selectColor = (color: any) => {
		setActiveColor(color);
		onColorChange(color.name);
	};

	return (
		<div className="flex items-center relative gap-2">
			{/* Botón interior */}
			{/* <ButtonC
				className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan"
				Icon={Interior}
				classNameIcon="p-2"
				tooltipId="buttoninside"
				tooltipText="Entrar al vehículo"
				onClick={onInsideClick}
			/> */}

			{/* Colores siempre visibles, centrados y circulares */}
			<div className="flex justify-center gap-2 w-full mt-4">
				{colorOptions.map((color) => (
				<div
					key={color.code}
					title={color.name}
					className={`color-option ${activeColor.code === color.code ? 'selected' : ''}`}
					style={{
						backgroundColor: color.code,
						width: 32,
						height: 32,
						borderRadius: '50%',
						border: activeColor.code === color.code ? '2px solid #007bff' : '3px solid #000',
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transition: 'border 0.2s',
						bottom: '150px'
					}}
					onClick={() => selectColor(color)}
				>
				</div>
        ))}
      </div>
		</div>
	);
};

export default DownButtonsC;
