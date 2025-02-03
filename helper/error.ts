export const checkForNegative = (propertyName : string, propertyValue: number) => {
  if(propertyValue < 0) {
    throw new Error(`${propertyName} cannot be negative`);
  }
}