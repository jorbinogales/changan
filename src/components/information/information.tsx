import { useState } from 'react';
import Auto1 from '../../assets/vehicles/cs55plus/components/auto1.png';
import Auto2 from '../../assets/vehicles/cs55plus/components/auto2.png';
import Auto3 from '../../assets/vehicles/cs55plus/components/auto3.png';

const InformationC = () => {
	const [activeTab, setActiveTab] = useState('motor');

	return (
		<div className="information grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
			{/* Parte izquierda: tabs */}
			<div className="p-4">
				<div className="mb-4 border-b border-gray-200">
					<h3 className="open-sans-bold">Ficha Técnica</h3>
					<ul
						className="flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto -mb-px text-sm font-medium text-center"
						role="tablist"
					>
						<li className="me-2" role="presentation">
							<button
								className={`hover:no-underline open-sans-bold inline-block p-4 border-b-2 rounded-t-lg
									w-full text-left md:w-auto md:text-center
									${activeTab === 'motor'
										? 'border-blue-changan text-primary-changan'
										: 'border-transparent text-gray-500'
									}`}
								id="profile-tab"
								type="button"
								role="tab"
								aria-controls="profile"
								style={{ textDecoration: 'none' }} // Esto aplica para todos los tamaños
								aria-selected={activeTab === 'motor'}
								onClick={() => setActiveTab('motor')}
							>
								MOTOR
							</button>
						</li>
						<li className="me-2" role="presentation">
							<button
								className={`hover:no-underline open-sans-bold inline-block p-4 border-b-2 rounded-t-lg
									w-full text-left md:w-auto md:text-center
									${activeTab === 'transmision'
										? 'border-blue-changan text-primary-changan'
										: 'border-transparent text-gray-500'
									}`}
								id="dashboard-tab"
								type="button"
								role="tab"
								aria-controls="dashboard"
								style={{ textDecoration: 'none' }}
								aria-selected={activeTab === 'transmision'}
								onClick={() => setActiveTab('transmision')}
							>
								TRANSMISIÓN
							</button>
						</li>
						<li className="me-2" role="presentation">
							<button
								className={`hover:no-underline open-sans-bold inline-block p-4 border-b-2 rounded-t-lg
									w-full text-left md:w-auto md:text-center
									${activeTab === 'frenos'
										? 'border-blue-changan text-primary-changan'
										: 'border-transparent text-gray-500'
									}`}
								id="settings-tab"
								type="button"
								role="tab"
								style={{ textDecoration: 'none' }}
								aria-controls="settings"
								aria-selected={activeTab === 'frenos'}
								onClick={() => setActiveTab('frenos')}
							>
								FRENOS Y SUSPENSIÓN
							</button>
						</li>
					</ul>
				</div>
				<div id="default-tab-content">
					<div
						className={`p-4 rounded-lg ${
							activeTab === 'motor' ? 'block' : 'hidden'
						}`}
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
					<div
						className={`p-4 rounded-lg ${
							activeTab === 'transmision' ? 'block' : 'hidden'
						}`}
						id="dashboard"
						role="tabpanel"
						aria-labelledby="dashboard-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
					<div
						className={`p-4 rounded-lg ${
							activeTab === 'frenos' ? 'block' : 'hidden'
						}`}
						id="settings"
						role="tabpanel"
						aria-labelledby="settings-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
				</div>
			</div>

			{/* Parte derecha: imágenes con grid 2 columnas arriba y 1 abajo span 2 */}
			<div className="p-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="p-4">
						<img src={Auto3} alt="Auto3" className="w-full" />
					</div>

					<div className="p-4">
						<img src={Auto2} alt="Auto2" className="w-full" />
					</div>

					<div className="p-4 col-span-2">
						<img src={Auto1} alt="Auto1" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationC;
