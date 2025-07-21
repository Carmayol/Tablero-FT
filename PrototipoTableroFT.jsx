import { useState } from "react";
import { AlertCircle, CheckCircle, PauseCircle } from "lucide-react";

const instrumentos = ["MDC", "SO", "EX", "EPI-FT", "Censo Cultural", "Emo-Mapa"];
const ejes = [
  "E1: Sinergia Cultural",
  "E2: Productividad Global",
  "E3: Alineación Estratégica",
  "E4: Cohesión y Aprendizaje",
  "E5: Agilidad y Gobernanza",
  "E6: Reputación Cultural"
];

const iconos = {
  riesgo: <AlertCircle color="red" />,
  avance: <CheckCircle color="green" />,
  estancamiento: <PauseCircle color="orange" />
};

export default function PrototipoTableroFT() {
  const [estado, setEstado] = useState({});

  const actualizar = (i, e, v) => {
    setEstado(prev => ({ ...prev, [`${i}-${e}`]: v }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Prototipo Navegable – Tablero FT
      </h1>
      {instrumentos.map(inst => (
        <div key={inst} style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
          <h2 style={{ fontSize: '20px' }}>{inst}</h2>
          {ejes.map(eje => (
            <div key={`${inst}-${eje}`} style={{ marginTop: '10px' }}>
              <label style={{ fontWeight: 'bold' }}>{eje}</label>
              <select
                onChange={e => actualizar(inst, eje, e.target.value)}
                style={{ marginLeft: '10px' }}
              >
                <option value="">Seleccionar estado</option>
                <option value="riesgo">Riesgo</option>
                <option value="avance">Avance</option>
                <option value="estancamiento">Estancamiento</option>
              </select>
              <span style={{ marginLeft: '10px' }}>
                {iconos[estado[`${inst}-${eje}`]] || null}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
