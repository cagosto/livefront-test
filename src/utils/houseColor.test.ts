import { describe, it, expect } from 'vitest';
import houseColor, { HouseNames } from './houseColor';

describe('houseColor', () => {
  it('should return correct color for Gryffindor', () => {
    expect(houseColor('gryffindor')).toBe('border-red-950');
  });

  it('should return correct color for Hufflepuff', () => {
    expect(houseColor('hufflepuff')).toBe('border-amber-600');
  });

  it('should return correct color for Ravenclaw', () => {
    expect(houseColor('ravenclaw')).toBe('border-slate-600');
  });

  it('should return correct color for Slytherin', () => {
    expect(houseColor('slytherin')).toBe('border-green-500');
  });

  it('should handle uppercase house names correctly', () => {
    expect(houseColor('GRYFFINDOR' as HouseNames)).toBe('border-red-950');
    expect(houseColor('HUFFLEPUFF' as HouseNames)).toBe('border-amber-600');
    expect(houseColor('RAVENCLAW' as HouseNames)).toBe('border-slate-600');
    expect(houseColor('SLYTHERIN' as HouseNames)).toBe('border-green-500');
  });

  it('should handle mixed case house names correctly', () => {
    expect(houseColor('GrYfFiNdOr' as HouseNames)).toBe('border-red-950');
    expect(houseColor('HuFfLePuFf' as HouseNames)).toBe('border-amber-600');
    expect(houseColor('RaVeNcLaW' as HouseNames)).toBe('border-slate-600');
    expect(houseColor('SlYtHeRiN' as HouseNames)).toBe('border-green-500');
  });

  it('should return undefined for non-matching input', () => {
    expect(houseColor('invalid' as HouseNames)).toBeUndefined();
    expect(houseColor('' as HouseNames)).toBeUndefined();
  });
});

