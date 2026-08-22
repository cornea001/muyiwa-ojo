// function convertToSubcurrency(amount: number, factor = 100) {
//     return Math.round(amount * factor);
// }

// export default convertToSubcurrency;

export default function convertToSubcurrency(
  amount: number
) {
  return Math.round(amount * 100);
}