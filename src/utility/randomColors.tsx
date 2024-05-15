export  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  export const assignColors = (numbers: number[]) => {
    const colorMap: { [key: number]: string } = {};
    numbers.forEach(number => {
      if (!colorMap[number]) {
        colorMap[number] = getRandomColor();
      }
    });
    return colorMap;
  };