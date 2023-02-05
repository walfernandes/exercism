
 const PREPARATION_MINUTES_PER_LAYER = 2;



export const EXPECTED_MINUTES_IN_OVEN = 40;
export const actualMinutesInOven = 5;
export const numberOfLayers = 1;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    throw new Error('Remove this line and implement the function');
}



export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
  throw new Error('Remove this line and implement the function');
}


export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return   numberOfLayers * PREPARATION_MINUTES_PER_LAYER  + actualMinutesInOven;
  throw new Error('Remove this line and implement the function');
}
