import React, { useEffect, useState } from 'react';
import { confirmarAsistencia } from '../utils/googleSheetUtils';

const ConfirmForm: React.FC = () => {
  const [nombre, setNombre] = useState<string | null>(null);
  const [telefono, setTelefono] = useState<string | null>(null);
  const [estado, setEstado] = useState<'cargando' | 'listo' | 'confirmado' | 'error'>('cargando');
  const [mensaje, setMensaje] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const tel = urlParams.get('telefono');

    if (!token || !tel) {
      setEstado('error');
      setMensaje('Token o teléfono no proporcionado.');
      return;
    }

    setNombre(token);
    setTelefono(tel);
    setEstado('listo');
  }, []);

  const handleConfirm = async () => {
    if (!nombre || !telefono) return;

    try {
      const res = await confirmarAsistencia(nombre, telefono);
      if (res.success) {
        setEstado('confirmado');
        setMensaje('✅ Confirmación registrada correctamente.');
      } else {
        setMensaje(`❌ Error: ${res.message}`);
      }
    } catch (e: any) {
      setMensaje(`❌ Error: ${e.message}`);
    }
  };

  if (estado === 'cargando') return <p>Cargando...</p>;
  if (estado === 'error') return <p>{mensaje}</p>;

  return (
    <div>
      <h2>Hola, {nombre}</h2>
      <p>Teléfono: {telefono}</p>

      {estado === 'confirmado' ? (
        <p>{mensaje}</p>
      ) : (
        <>
          <label>
            <input type="checkbox" onChange={handleConfirm} /> Confirmar asistencia
          </label>
          <p>{mensaje}</p>
        </>
      )}
    </div>
  );
};

export default ConfirmForm;