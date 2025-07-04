import Cauchos from './../../assets/vehicles/cs55plus/components/cauchos.jpg';
import Luces from './../../assets/vehicles/cs55plus/components/luces.jpg';
import Ventanas from './../../assets/vehicles/cs55plus/components/ventanas.jpg';
import Motor from './../../assets/vehicles/cs55plus/components/motor.jpg';
import Maletera from './../../assets/vehicles/cs55plus/components/maletera.jpg';

const ids = ['caucho', 'maletera', 'parabrisas', 'luz', 'motor'];

const hintsById: any = {
    caucho: {
        image: Cauchos,
        content: `<h3 class="play-bold text-left uppercase">Caucho</h3>
					<p class="open-sans-regular">
					Disfruta de una conducción segura y confortable gracias a los cauchos de alta calidad que incorpora este modelo. 
					</p>`,
    },
    maletera: {
        image: Maletera,
        content: `<h3 class="play-bold text-left uppercase">Maletera</h3>
					<p class="open-sans-regular">
					Descubre la amplitud y versatilidad de un maletero diseñado para acompañar tu estilo de vida. 
					</p>`,
    },
    parabrisas: {
        image: Ventanas,
        content: `<h3 class="play-bold text-left uppercase">Parabrisas</h3>
					<p class="open-sans-regular">
					Experimenta una visión clara y conectividad total con el parabrisas panorámico y el avanzado sistema de
					infoentretenimiento de 12,3”.
					tecnología de punta.
					</p>`,
    },
    luz: {
        image: Luces,
        content: `<h3 class="play-bold text-left uppercase">Luz</h3>
					<p class="open-sans-regular">
					Destaca en cualquier camino con el moderno sistema de iluminación LED, que no solo mejora tu visibilidad y seguridad.
					</p>`,
    },
    motor: {
        image: Motor,
        content: `<h3 class="play-bold text-left uppercase">Motor</h3>
				<p class="open-sans-regular">
				Siente la potencia y eficiencia de un motor diseñado para ofrecerte el mejor desempeño en cada kilómetro. 
				</p>`,
    },
};


const position: any = {
	'0001': [
		{ top: '45%', left: '28%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '55%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '74%', display: 'block' },
	],
	'0002': [
		{ top: '45%', left: '28%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '55%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '74%', display: 'block' },
	],
	'0003': [
		{ top: '45%', left: '28%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '55%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '74%', display: 'block' },
	],
	'0004': [
		{ top: '45%', left: '27%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'block' },
	],
	'0005': [
		{ top: '45%', left: '27%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '76%', display: 'block' },
	],
	'0006': [
		{ top: '45%', left: '27%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '76%', display: 'block' },
	],
	'0007': [
		{ top: '45%', left: '27%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '77%', display: 'block' },
	],
	'0008': [
		{ top: '45%', left: '28%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0009': [
		{ top: '45%', left: '29%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0010': [
		{ top: '45%', left: '32%', display: 'block' },
		{ top: '30%', left: '25%', display: 'none' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0011': [
		{ top: '45%', left: '35%', display: 'block' },
		{ top: '30%', left: '20%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0012': [
		{ top: '45%', left: '38%', display: 'block' },
		{ top: '30%', left: '21%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0013': [
		{ top: '45%', left: '42%', display: 'block' },
		{ top: '30%', left: '23%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0014': [
		{ top: '45%', left: '47%', display: 'block' },
		{ top: '30%', left: '26%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0015': [
		{ top: '45%', left: '52%', display: 'block' },
		{ top: '30%', left: '32%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0016': [
		{ top: '45%', left: '58%', display: 'block' },
		{ top: '30%', left: '39%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0017': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '47%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0018': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '55%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0019': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '63%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0020': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '69%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0021': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '74%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '65%', display: 'none' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0022': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '22%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0023': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '22%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0024': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'block' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '22%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0025': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '22%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0026': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '56%', display: 'none' },
		{ top: '35%', left: '25%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0027': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '40%', display: 'block' },
		{ top: '35%', left: '28%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0028': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '44%', display: 'block' },
		{ top: '35%', left: '35%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0029': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '44%', display: 'block' },
		{ top: '38%', left: '40%', display: 'block' },
		{ top: '40%', left: '75%', display: 'none' },
	],
	'0030': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '44%', display: 'block' },
		{ top: '38%', left: '46%', display: 'block' },
		{ top: '38%', left: '33%', display: 'block' },
	],
	'0031': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '46%', display: 'block' },
		{ top: '38%', left: '52%', display: 'block' },
		{ top: '38%', left: '40%', display: 'block' },
	],
	'0032': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '48%', display: 'block' },
		{ top: '38%', left: '58%', display: 'block' },
		{ top: '38%', left: '46%', display: 'block' },
	],
	'0033': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '50%', display: 'block' },
		{ top: '38%', left: '62%', display: 'block' },
		{ top: '38%', left: '52%', display: 'block' },
	],
	'0034': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '52%', display: 'block' },
		{ top: '38%', left: '66%', display: 'block' },
		{ top: '38%', left: '56%', display: 'block' },
	],
	'0035': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'block' },
		{ top: '38%', left: '60%', display: 'block' },
	],
	'0036': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '66%', display: 'block' },
	],
	'0037': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '68%', display: 'block' },
	],
	'0038': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '70%', display: 'block' },
	],
	'0039': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '72%', display: 'block' },
	],
	'0040': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '74%', display: 'block' },
	],
	'0041': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '75%', display: 'block' },
	],
	'0042': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '75%', display: 'block' },
	],
	'0043': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '75%', display: 'block' },
	],
	'0044': [
		{ top: '45%', left: '58%', display: 'none' },
		{ top: '30%', left: '78%', display: 'none' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '38%', left: '70%', display: 'none' },
		{ top: '38%', left: '74%', display: 'block' },
	],
};

const highlightPositions: any = [];

for (const [key, posArray] of Object.entries<any>(position)) {
	highlightPositions[key] = posArray.map((pos: any, index: number) => {
		const id = ids[index] ?? `unknown-${index}`;
		const hint = hintsById[id] ?? { content: '', image: '' };
		return {
			...pos,
			id,
			hint,
		};
	});
}

export default highlightPositions;
