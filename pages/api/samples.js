const categories = [
  { "name": "react", "icon": "code", "url": "react" },
  { "name": "react native", "icon": "code", "url": "react-native" },
  { "name": "etl", "icon": "code", "url": "etl" },
  { "name": "java", "icon": "code", "url": "java" },
  { "name": "scala", "icon": "code", "url": "scala" },
  { "name": "javascript", "icon": "code", "url": "javascript" }
]

const questions = [
  {
      "id": 1,
      "question": "¿qué es el DOM virtual y cómo lo utiliza React para representarlo en el DOM?",
      "is_practice": false,
      "response": "**El DOM virtual** (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM. Este proceso se conoce como reconciliación.\n\nEste enfoque hace posible la API declarativa de React: le dices a React en qué estado quieres que esté la IU, y se hará cargo de llevar el DOM a ese estado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización manual del DOM que de otra manera tendrías que usar para construir tu aplicación.",
      "level": 1,
      "category": { "name": "react", "icon": "code", "url": "react" }
  }
]

export { categories, questions }