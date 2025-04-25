const colores = [
    '#FFB6C1', 
    '#D9FFB5', 
    '#FFD700', 
    '#ADD8E6', 
    '#FF6347', 
    '#98FB98', 
    '#FFA07A', 
  ];
  let colorIndex = 0; 
  
  export function  obtenerColorPredefinido() {
    const color = colores[colorIndex];
    colorIndex = (colorIndex + 1) % colores.length; // Aumentar el índice y volver a empezar al llegar al final
    return color;
  }
  