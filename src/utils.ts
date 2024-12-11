export const COLORS = [
  "#5fbf24",
  "#c0392b",
  "#e74c3c",
  "#27ae60",
  "#3498db",
  "#f39c12",
  "#f1c40f",
  "#e610c4",
  "#220dde",
  "#9124bf",
];

export const getRandomColor = () => {
  const randomIndex = Math.round(Math.random() * COLORS.length) - 1;
  return COLORS[randomIndex];
};
