import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <section className="footer">
        <h2>Nota importante:</h2>
        <p>
          Cada invitación fue pensada especial y unicamente para vos y cada una
          de las personas mencionadas. Agradeceríamos mucho si nos confirmas tu
          asistencia. También nos encantaría si podes colaborar con una bebida
          para el almuerzo y sumar todo lo que quieras para compartir el
          matecito en la tarde. <br />
          Respecto a la vestimenta, queremos que se sientan cómodos, no es
          obligatorio, pero nos ilusiona que muchos se sumen al código de
          vestimenta inspirado en lo natural y sencillo , para acompañar la
          atmósfera del evento.
        </p>
        <p>¡Los esperamos con mucha emoción!</p>
      </section>
      <footer className="content-img">
        <div className="inverter-cover"></div>
      </footer>
    </>
  );
};

export default Footer;
