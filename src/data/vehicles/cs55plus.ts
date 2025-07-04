export const CS55PLUS_CONFIG = {
  name: 'CS55 PLUS',
  baseUrl: '/assets/vehicles/cs55plus/360/',
  colors: ['black', 'white'],
  qualities: ['low', 'medium', 'high'],
  defaultColor: 'white',
  totalImages: 45,
  step: 1,
  markers: [
    {
      id: "#0.8713489950832229",
      position: { yaw: 5.955925404315755, pitch: -0.299145403541164 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Ver volante",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Volante</h3>
          <p class="open-sans-regular">
            El volante del CS55 PLUS está diseñado ergonómicamente para brindar el máximo confort y control al conductor.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/volante.jpg"
      }
    },
    {
      id: "#0.3434954835748676",
      position: { yaw: 6.099774907187396, pitch: -0.11000081400129282 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Ver pantalla de velocidad",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Velocímetro</h3>
          <p class="open-sans-regular">
            El velocímetro digital del CS55 PLUS ofrece una visualización clara y precisa de la velocidad del vehículo.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/velocimetro.jpg"
      }
    },
    {
      id: "#0.17564282170655676",
      position: { yaw: 6.4069117904307114, pitch: -0.2129369814575348 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Pantalla Principal",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Pantalla Principal</h3>
          <p class="open-sans-regular">
            La pantalla principal del CS55 PLUS es el centro de control de entretenimiento y navegación del vehículo.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/tablero.jpg"
      }
    },
    {
      id: "#0.6275172064733163",
      position: { yaw: 5.487366027014835, pitch: -0.27941536162851675 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Botones de control de puerta",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Botones de control de puerta</h3>
          <p class="open-sans-regular">
            Los botones de control de puerta del CS55 PLUS están diseñados para ofrecer comodidad y funcionalidad.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/puerta.jpg"
      }
    },
    {
      id: "#0.3218635163356788",
      position: { yaw: 0.012319705229270311, pitch: -0.5467779300816904 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Palanca de cambios",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Palanca de cambios</h3>
          <p class="open-sans-regular">
            La palanca de cambios del CS55 PLUS combina diseño moderno y funcionalidad.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/palanca.jpg"
      }
    },
    {
      id: "#0.6839899884784868",
      position: { yaw: 4.9057628559769754, pitch: -0.2776830177943106 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Tapicería",
      data: {
        generated: true,
        hintContent: `
          <h3 class="play-bold text-left uppercase">Tapicería</h3>
          <p class="open-sans-regular">
            La tapicería del CS55 PLUS destaca por su calidad y diseño sofisticado.
          </p>
        `,
        hintImage: "/assets/vehicles/cs55plus/components/asiento.jpg"
      }
    },
    {
      id: "#0.6686156658809457",
      position: { yaw: 3.0088254664916296, pitch: -0.42906512811307684 },
      html: `
        <div class="indicator-container">
          <div class="pulse-ring"></div>
          <div class="indicator-core"></div>
        </div>
      `,
      size: { width: 32, height: 32 },
      anchor: "bottom center",
      tooltip: "Asientos Traseros",
      data: {
      generated: true,
      hintContent: `
        <h3 class="play-bold text-left uppercase">ASIENTOS TRASEROS</h3>
        <p class="open-sans-regular text-left">
        Los asientos traseros del CS55 PLUS están diseñados para maximizar el espacio y la comodidad de los pasajeros.
        </p>
      `,
      hintImage: "/assets/vehicles/cs55plus/components/trasero.jpg"
		},
    }
  ],
};