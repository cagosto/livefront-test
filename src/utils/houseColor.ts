export type HouseNames =
  | 'gryffindor'
  | 'slytherin'
  | 'ravenclaw'
  | 'hufflepuff';
export default function houseColor(house: HouseNames) {
  switch (house.toLowerCase()) {
    case 'gryffindor':
      return 'border-red-950';
    case 'hufflepuff':
      return 'border-amber-600';
    case 'ravenclaw':
      return 'border-slate-600';
    case 'slytherin':
      return 'border-green-500';
  }
}

