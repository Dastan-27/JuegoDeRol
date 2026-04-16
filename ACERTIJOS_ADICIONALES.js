// EJEMPLOS DE MÁS ACERTIJOS PARA AGREGAR AL JUEGO
// Copia y pega los salones que quieras en app/data/world.json

[
  // ACERTIJO CLÁSICO 1: EL ESPEJO
  {
    "id": "espejo",
    "nombre": "Sala del Espejo Antiguo",
    "descripcion": "Una habitación de paredes frías. En el centro, un enorme espejo antiguo cuelga de la pared. Parece estar esperándote desde hace siglos.",
    "acertijo": "Tengo cara, pero no tengo ojos. Puedo reflejarte, pero no soy real. ¿Qué soy?",
    "respuesta": "Un espejo",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO CLÁSICO 2: LA SOMBRA
  {
    "id": "sombra",
    "nombre": "Cuarto Oscuro",
    "descripcion": "Apenas hay luz aquí. Solo ves sombras danzando en las paredes. Un acertijo anónimo está grabado en el piso.",
    "acertijo": "Sigo tus pasos, pero soy silenciosa. Cuando hay luz, estoy presente. Cuando es de noche, desaparezco. ¿Qué soy?",
    "respuesta": "Tu sombra",
    "direcciones": {
      "norte": null,
      "sur": "pasillo",
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO CLÁSICO 3: EL MAPA
  {
    "id": "mapa",
    "nombre": "Bóveda del Conocimiento",
    "descripcion": "Miles de documentos cartográficos cubren las paredes. Un acertijo fásico está en el centro de la sala.",
    "acertijo": "Tengo ciudades pero no casas. Tengo montañas pero no árboles. Tengo agua pero no peces. ¿Qué soy?",
    "respuesta": "Un mapa",
    "direcciones": {
      "norte": null,
      "sur": null,
      "este": "pasillo",
      "oeste": null
    }
  },

  // ACERTIJO CLÁSICO 4: EL ECO
  {
    "id": "eco",
    "nombre": "Cañón Subterráneo",
    "descripcion": "Un abismo profundo se extiende ante ti. Las paredes de piedra amplificam los sonidos. Tu voz rebota una y otra vez.",
    "acertijo": "Hablo sin boca y escucho sin oídos. No tengo cuerpo pero despierto con el viento. ¿Qué soy?",
    "respuesta": "Un eco",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO CLÁSICO 5: EL RELOJ
  {
    "id": "reloj",
    "nombre": "Torre del Reloj",
    "descripcion": "El tic-tac del reloj llena la habitación. Engranajes enormes giran lentamente. Un acertijo está grabado en la cara del reloj.",
    "acertijo": "Tengo un rostro y dos manos, pero no tengo ojos. Cuanto más rápido voy, más silencioso soy. ¿Qué soy?",
    "respuesta": "Un reloj",
    "direcciones": {
      "norte": null,
      "sur": "pasillo",
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO DE LÓGICA 1: ACERTIJO DEL RÍO
  {
    "id": "rio",
    "nombre": "A Orillas del Río",
    "descripcion": "Un campesino debe cruzar un río en una barca. Tiene un lobo, una cabra y una col. Solo caben dos en la barca.",
    "acertijo": "¿Cómo logra pasar todo sin que el lobo coma la cabra o la cabra coma la col?",
    "respuesta": "Primero cruza la cabra. Vuelve solo. Luego cruza el lobo (o la col). Trae de vuelta la cabra. Cruza la col. Vuelve solo. Finalmente cruza la cabra",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO DE LÓGICA 2: LOS SOMBREROS
  {
    "id": "sombreros",
    "nombre": "Sala de los Tres Sombreros",
    "descripcion": "Tres personajes están en una habitación oscura. Cada uno lleva un sombrero (blanco o negro). Deben adivinar el color de su sombrero.",
    "acertijo": "Se ponen 3 sombreros de forma que NO PUEDEN VER el suyo, pero SÍ pueden ver el de los demás. Dos personas ven un sombrero blanco. ¿Qué pueden deducir sobre sus propios sombreros?",
    "respuesta": "Si ambos vieran un sombrero negro en el otro, sabrían que ellos tienen blanco. Si ambos ven blanco, deben tener negro",
    "direcciones": {
      "norte": null,
      "sur": "pasillo",
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO DE DETECCIÓN DE FRAUDE
  {
    "id": "moneda",
    "nombre": "Cámara de Monedas",
    "descripcion": "Pilas de monedas antiguas llenan la habitación. Se dice que hay una moneda falsa. Un acertijo sobre cómo detectarla está escrito en una tarjeta.",
    "acertijo": "Tienes 10 pilas de monedas. Una pila está completamente falsificada (1g menos cada moneda, en vez de 1kg normal). Con una báscula, ¿cómo identificas la pila falsa en UNA SOLA PESADA?",
    "respuesta": "Toma 1 moneda de la pila 1, 2 de la pila 2, 3 de la pila 3, etc. Pésalas todas juntas. El déficit en gramos te indica qué pila es falsa",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO WORDPLAY 1: ¿QUÉ TIENE?
  {
    "id": "paradoja",
    "nombre": "Sala de Paradojas",
    "descripcion": "Las paredes están cubiertas de frases contradictorias. Todas parecen jugar con las palabras y el significado.",
    "acertijo": "Cuantas más tomas, más dejas. Cuanto menos tomas, menos dejas. ¿Qué es?",
    "respuesta": "Huellas o pasos",
    "direcciones": {
      "norte": null,
      "sur": "pasillo",
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO WORDPLAY 2: LA PREGUNTA
  {
    "id": "pregunta",
    "nombre": "Sala de la Pregunta",
    "descripcion": "Una pregunta flotante en el aire sin respuesta. Parece ser el acertijo más importante de todos.",
    "acertijo": "¿Qué pregunta nunca puedes responder con 'sí'?",
    "respuesta": "¿Estás dormido? o ¿Estás muerto?",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO MATEMÁTICO 1: LA SECUENCIA
  {
    "id": "secuencia",
    "nombre": "Biblioteca Matemática",
    "descripcion": "Una pizarra muestra una secuencia numérica. Debes encontrar el patrón para continuar la serie.",
    "acertijo": "¿Cuál es el siguiente número en esta secuencia?: 1, 1, 2, 3, 5, 8, 13, ?",
    "respuesta": "21 (es la secuencia de Fibonacci)",
    "direcciones": {
      "norte": null,
      "sur": "pasillo",
      "este": null,
      "oeste": null
    }
  },

  // ACERTIJO CRIMEN 1: DETECTIVE
  {
    "id": "crimen-banco",
    "nombre": "Escena del Robo",
    "descripcion": "Un banco fue robado. Hay tres sospechosos y cada uno tiene una coartada. Analiza los hechos para encontrar al culpable.",
    "acertijo": "3 sospechosos. A dice: 'C lo hizo'. B dice: 'Yo no lo hice'. C dice: 'A miente'. Solo uno dice la verdad. ¿Quién es el culpable?",
    "respuesta": "C es el culpable. C miente (porque A no miente). A y B dicen la verdad.",
    "direcciones": {
      "norte": "pasillo",
      "sur": null,
      "este": null,
      "oeste": null
    }
  }
]

// CÓMO USAR ESTOS EJEMPLOS:
// 1. Copia un objeto de acertijo completo
// 2. Úsalo en app/data/world.json
// 3. Asegúrate de que las "direcciones" apunten a salas existentes
// 4. Actualiza las conexiones bidireccionales en las otras salas

// DIFICULTAD:
// ⭐ Muy Fácil: Espejo, Sombra, Mapa, Reloj, Echo
// ⭐⭐ Fácil: Paradoja, Pregunta
// ⭐⭐⭐ Medio: Río, Sombreros, Secuencia
// ⭐⭐⭐⭐ Difícil: Moneda, Crimen
// ⭐⭐⭐⭐⭐ Muy Difícil: Implementar lógica personalizada
