import React, { useState, useEffect, useRef } from 'react';
import 'react-circular-progressbar/dist/styles.css';


import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';

import TitleC from '../components/showcar/title';
import ArrowRoundedLeft from './../assets/icons/arrow_rounded_left.svg';
import ArrowRoundedRight from './../assets/icons/arrow_rounded_right.svg';

import IndicatorC from '../components/indicator/Indicator';

import './index.css';
import WhatsAppButton from '../components/whatsapp/whatsapp';
import highlightPositions from '../components/hightlights/hightlights';
import HintC from '../components/hint/hint';
import PreloaderC from '../components/preloader/preloader';
import HintModalC from '../components/hint/hintModal';
import InformationC from '../components/information/information';
import ModalInsideC from '../components/modalInside/modalInside';
import type { VehicleConfig } from '../interface/vehicle.config';
import DownButtonsC from '../components/showcar/footer';

const formatNumber = (num: number): any => String(num).padStart(4, '0');

interface ShowroomVehicleProps {
	config: VehicleConfig;
}

const Showroom: React.FC<ShowroomVehicleProps> = ({ config }) => {
	const MAX_INDEX = config.totalImages - config.step;

	/* Zoom */
	const [zoomed, setZoomed] = useState(false);

	/* Quality */
	const [currentQuality, setCurrentQuality] = useState(config.qualities[0]);
    const [qualityLoaded, setQualityLoaded] = useState({ low: false, medium: false, high: false });

	/* Hints */
	const [showHints, setShowHints] = useState(false);

	/* Viewer */
	const viewerRef = useRef<HTMLDivElement>(null);
	const viewerInstance = useRef<any>(null);

	/* 360 */
	const [showInterior, setShowInterior] = useState(false);


	/* Modales */
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedHint, setSelectedHint] = useState<{
		content: string;
		imageUrl: any;
	} | null>(null);

	const [currentColor, setCurrenColor] = useState(config.defaultColor);
	const [currentIndex, setCurrentIndex] = useState(1);
	const [isBouncing, setIsBouncing] = useState(false);

	/* Cargando imagenes */
	const [loadedCount, setLoadedCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [lastLoadedImage, setLastLoadedImage] = useState<string | null>(null);

	const startX = useRef<number | null>(null);

	/* show hint */
	const handleIndicatorHide = () => {
		setShowHints(true); // Mostrar los hints cuando el indicador se oculte
	};

	// Preload images
	useEffect(() => {
		const preloadByQuality = async (quality: string) => {
			let loaded = 0;
			const promises: Promise<void>[] = [];
			for (const color of config.colors) {
				for (let i = 1; i < config.totalImages; i += config.step) {
					const src = `/assets/vehicles/cs55plus/${color}/${quality}/${formatNumber(i)}.png`;
					promises.push(new Promise<void>((resolve) => {
						const img = new window.Image();
						img.src = src;
						img.onload = () => {
							loaded += 1;
							setLoadedCount(lc => lc + 1);
							setLastLoadedImage(src);
							resolve();
						};
						img.onerror = () => {
							loaded += 1;
							setLoadedCount(lc => lc + 1);
							setLastLoadedImage(src);
							resolve();
						};
					}));
				}
			}
			await Promise.all(promises);
			setQualityLoaded(prev => ({ ...prev, [quality]: true }));
			if (quality === 'low') {
				setLoading(false); // Mostrar la página cuando termine la baja
			}
			console.log(`Cargadas imágenes de calidad ${JSON.stringify(qualityLoaded)}: ${loaded} imágenes`);
		};

		// Carga baja primero, luego media, luego alta
		preloadByQuality('low').then(() => {
			setLoading(false);
			preloadByQuality('medium').then(() => {
				setCurrentQuality('medium');
				preloadByQuality('high').then(() => {
					setCurrentQuality('high');
				});
			});
		});
	}, [config.colors, config.totalImages, config.step]);

	const percentage = Math.min((loadedCount / config.totalImages) * 100, 100);

	const changeColor = (color: string) => {
		setIsBouncing(true);
		setCurrenColor(color);
		// Quitar la clase bounce después de que termine la animación
		setTimeout(() => {
			setIsBouncing(false);
		}, 500); // Tiempo que coincide con la duración de la animación
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		startX.current = e.clientX;
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
	};

	const handleMouseUp = () => {
		startX.current = null;
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('mousemove', handleMouseMove);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (startX.current === null) return;
		const diffX = e.clientX - startX.current;

		if (Math.abs(diffX) > 10) {
			if (diffX > 5) {
				setCurrentIndex((prev) => (prev + config.step > MAX_INDEX ? 1 : prev + config.step));
			} else {
				setCurrentIndex((prev) => (prev - config.step < 1 ? MAX_INDEX : prev - config.step));
			}
			startX.current = e.clientX;
		}
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (startX.current === null) return;
		const currentX = e.touches[0].clientX;
		const diffX = currentX - startX.current;

		if (Math.abs(diffX) > 10) {
			if (diffX > 5) {
				setCurrentIndex((prev) => (prev + config.step > MAX_INDEX ? 1 : prev + config.step));
			} else {
				setCurrentIndex((prev) => (prev - config.step < 1 ? MAX_INDEX : prev - config.step));
			}
			startX.current = currentX;
		}
	};

	// abrir modal
	const openModalInfo = (id: string) => {
		const hint = highlightPositions[formatNumber(currentIndex)]?.find(
			(p: any) => p.id === id
		);
		if (hint) {
			setSelectedHint({
				content:
					hint.hint.content || 'No hay información disponible para este hint.',
				imageUrl:
					hint.hint.image ||
					'https://changanvzla.com/wp-content/uploads/2024/10/camioneta-CS55-Plus-galeria2.jpg',
			});
			setIsModalOpen(true);
		}
	};

	 const imageSrc = `/assets/vehicles/cs55plus/${currentColor}/${currentQuality}/${formatNumber(currentIndex)}.png`;

	const imgRef = useRef<HTMLImageElement | null>(null); //
	const [imgHeight, setImgHeight] = useState(0);

	useEffect(() => {
		if (imgRef.current) {
			setImgHeight(imgRef.current.offsetHeight);
		}
	}, [imageSrc]); // o cualquier dependencia que cambie el tamaño de la imagen

	useEffect(() => {
		const updateHeight = () => {
			if (imgRef.current) {
				setImgHeight(imgRef.current.offsetHeight);
			}
		};

		// Observador para cambios de tamaño
		const observer = new ResizeObserver(() => {
			updateHeight();
		});

		if (imgRef.current) {
			observer.observe(imgRef.current);
			// Fallback inicial por si ResizeObserver tarda
			setTimeout(updateHeight, 100);
		}

		// Cleanup
		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, []);

	// Bloquea el scroll cuando el modal está abierto
	useEffect(() => {
		if (showInterior) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [showInterior]);

	useEffect(() => {
		if (!showInterior || !viewerRef.current) return;

		const viewer = new Viewer({
			container: viewerRef.current,
			panorama: config.baseUrl + '360.jpg',
			caption: config.name,
			plugins: [
				[MarkersPlugin, { markers: config.markers }]
			],
			navbar: ['caption', 'zoom'],
			defaultZoomLvl: 50,
			moveSpeed: 2,
		});

		viewerInstance.current = viewer;

		const markersPlugin = viewer.getPlugin(MarkersPlugin) as MarkersPlugin;
		markersPlugin.addEventListener('select-marker', ({ marker }) => {
			setSelectedHint({
				content: marker.data?.hintContent || marker.config.tooltip || 'Sin contenido',
				imageUrl: marker.data?.hintImage || null,
			});
			setIsModalOpen(true);
		});

		return () => {
			viewer.destroy();
		};
	}, [showInterior]);



	return (
		<>
			<PreloaderC
				percentage={percentage}
				lastLoadedImage={lastLoadedImage}
				loading={loading}
			/>
			<div className="flex background-showroom360">
				{/* Contenido principal */}
				<div className="flex-1 p-4 transition-all duration-300 relative mt-5">
					<div className="mb-[5vh] flex justify-center items-center mt-5">
						<div className="max-w-7xl container relative mt-5">
							<TitleC  onZoomClick={() => setZoomed(z => !z)} isZoomed={zoomed}/>
							<div
								className="vehicle-box w-full overflow-x-hidden overflow-y-hidden relative max-w-[1200px] flex m-auto"
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onMouseDown={handleMouseDown}
								style={{ userSelect: 'none', cursor: 'grab' }}
							>
								{showHints && <img
									src={ArrowRoundedLeft}
									className="arrow-rounded-left arrow-blink"
									alt="Girar izquierda"
								/>
								}

								<img
									ref={imgRef}
									src={imageSrc}
									className={`vehiculo ${isBouncing ? 'bounce' : ''}`}
									alt="Vehículo"
									style={zoomed ? { transform: 'scale(1.5)' } : undefined}
									draggable={false}
									onLoad={() => {
										if (imgRef.current) {
											setImgHeight(imgRef.current.offsetHeight);
										}
									}}
								/>
								{showHints && <img
									src={ArrowRoundedRight}
									className="arrow-rounded-right arrow-blink"
									alt="Girar derecha"
								/>}
								<div
									style={zoomed ? { 
										transform: 'scale(1.5)',
										position: 'absolute',
										height: imgHeight,
									} : {
										position: 'absolute',
										height: imgHeight,
									}}
									className={'vehiculo'}
								>
									{showHints && highlightPositions[formatNumber(currentIndex)]?.map(
										(pos: any, idx: string) => (
											<div
												onClick={() => openModalInfo(pos.id)}
												key={idx}
												style={{
													position: 'absolute',
													top: pos.top,
													left: pos.left,
													display: pos.display,
													transform: 'translate(-50%, -50%)',
												}}
											>
												<HintC></HintC>
											</div>
										)
									)}
								</div>
							</div>

							{showHints && <WhatsAppButton />}
							<IndicatorC onHide={handleIndicatorHide} />
							<DownButtonsC onColorChange={changeColor} onInsideClick={() => setShowInterior(true)} />
						</div>
					</div>
				</div>
			</div>
			<div className="body-content">
				<InformationC></InformationC>
			</div>
			<ModalInsideC open={showInterior} onClose={() => setShowInterior(false)}>
				<div className="w-full h-[70vh]">
					<div ref={viewerRef} className="w-full h-full" />
				</div>
			</ModalInsideC>

			<HintModalC
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				content={selectedHint?.content}
				image={selectedHint?.imageUrl}
			/>
		</>
	);
};

export default Showroom;
