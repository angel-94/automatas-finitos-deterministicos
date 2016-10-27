import React from 'react';

export default ({pagina, entradas}) => (
  <div>
    <h1>Home</h1>
    <p>Crea el diagrama para tu AFD con el dise&ntilde;o que m&aacute;s te guste</p>
    <button onClick={entradas}>Crear AFD</button>
    <div>
      <h1>Cuerpo de la pagina</h1>
      {pagina}
    </div>
  </div>
);
