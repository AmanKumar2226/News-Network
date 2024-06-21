export function getRandomGradient() {
    const gradients = [
      "bg-gradient-to-b from-blue-600 to-blue-300",
      "bg-gradient-to-b from-green-600 to-green-300",
      "bg-gradient-to-b from-purple-600 to-purple-300",
      "bg-gradient-to-b from-red-600 to-red-300",
      "bg-gradient-to-b from-yellow-600 to-yellow-300",
    ];
  
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  }