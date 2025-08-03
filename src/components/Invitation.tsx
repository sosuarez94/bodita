// Invitation.tsx
import React, { useEffect, useState } from "react";
import { getQueryParams } from "../utils/paramsHook";
import { getConfirmedData, postConfirmation } from "../services/api";

interface Option {
  id: string;
  label: string;
  checked: boolean;
  disabled: boolean;
}

const Invitation: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [telefono, setTelefono] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [allConfirmed, setAllConfirmed] = useState<boolean>(false);
  telefono

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { telefono, id } = getQueryParams();

    if (!telefono || !id) {
      setError("Faltan parámetros en la URL");
      setLoading(false);
      return;
    }

    try {
      const data = await getConfirmedData(telefono, id);
      //console.log(data);

      const personasOriginales: string[] =
        data.personasOriginales?.split(",").map((p: any) => p.trim()) ?? [];
      const nombresConfirmados: string[] =
        data.nombresConfirmadosParaID?.split(",").map((p: any) => p.trim()) ?? [];

      const mapped = personasOriginales.map((name, index) => {
        const yaConfirmado = nombresConfirmados.includes(name);
        return {
          id: `check${index}`,
          label: name,
          checked: yaConfirmado,
          disabled: yaConfirmado,
        };
      });

      setOptions(mapped);

      // si TODOS están confirmados, deshabilitamos todo
      const todosConfirmados = mapped.every((o) => o.disabled);
      setAllConfirmed(todosConfirmados);

      setTelefono(telefono); // guardamos telefono para enviar después
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (index: number) => {
    const updated = [...options];
    updated[index].checked = !updated[index].checked;
    setOptions(updated);
  };

  const handleConfirm = async () => {
    const { telefono } = getQueryParams();

    if (!telefono) {
      alert("Falta el teléfono en la URL");
      return;
    }

    const personas = options.filter((o) => o.checked).map((o) => o.label);

    if (personas.length === 0) {
      alert("Seleccioná al menos una persona.");
      return;
    }

    try {
      setSendLoading(true)
      const result = await postConfirmation(personas, telefono);
      alert("Confirmación enviada");
      result
      await fetchData()
      setSendLoading(false)
      //console.log(result);
    } catch (error) {
      alert("Error al enviar la confirmación");
    }
  };

  return (
    <section className="invitation">
      <h2>Invitados:</h2>
      {sendLoading && (
        <div className="content-msg">
          <span className="loader"></span>
        </div>
      )}

      {loading && (
        <div className="content-msg">
          <p>Cargando datos...</p>
        </div>
      )}
      {error && (
        <div className="content-msg">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}

      {!loading && !error && !sendLoading && (
        <>
          <div className="grid-container">
            {options.map((option, index) => (
              <div className="item" key={option.id}>
                <label htmlFor={option.id}>{option.label}</label>
                <input
                  type="checkbox"
                  id={option.id}
                  checked={option.checked}
                  disabled={option.disabled}
                  onChange={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>

          <button
            className="send"
            onClick={handleConfirm}
            disabled={
              allConfirmed ||
              options.filter((o) => !o.disabled).every((o) => !o.checked)
            }
          >
            Confirmar
          </button>
        </>
      )}

      <hr />
    </section>
  );
};

export default Invitation;
