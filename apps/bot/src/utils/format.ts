type FormattedDiceValue = {
  numberOfDice: number;
  diceNumberOfFace: number;
  oui: number;
}

export function formatDiceValue(value: string): FormattedDiceValue {
  const [valueNbOfDice, diceValue] = value.split(/d|D/);
  const numberOfDice = valueNbOfDice === '' ? 1 : parseInt(valueNbOfDice);
  const [face, plus] = diceValue.split(/+|-/);

  return {
    numberOfDice,
    diceNumberOfFace: parseInt(face),
    oui: plus == undefined ? 0 : parseInt(plus),
  };
}