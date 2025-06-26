import { CS55PLUS_CONFIG } from '../data/vehicles/cs55plus';
import ShowroomVehicle from './Showroom';

const Cs55plusPage = () => (
  <>
    <title>Changan CS55 PLUS - Showroom 360</title>
    <meta name="description" content="Explora el Changan CS55 PLUS en 360 grados, descubre sus colores y características." />
    <ShowroomVehicle config={CS55PLUS_CONFIG} />
  </>
);

export default Cs55plusPage;