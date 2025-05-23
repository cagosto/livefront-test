import { beforeEach, describe, expect, it, vi } from 'vitest';
import potterApi from '@/services/potterApi';
import { mockCharacters } from '@/data/mock/charactersList';
import { getAllCharacters, getCharacterInfo } from './characters';

vi.mock('@/services/potterApi', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('Characters', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllCharacters', () => {
    it('should fetch and return all characters successfully', async () => {
      const mockResponse = { data: mockCharacters };
      vi.mocked(potterApi.get).mockResolvedValue(mockResponse);
      const result = await getAllCharacters();

      expect(potterApi.get).toHaveBeenCalledWith('characters');
      expect(potterApi.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockCharacters);
      expect(result).toHaveLength(3);
    });

    it('should handle API errors and re-throw them', async () => {
      const mockError = new Error('API Error');
      vi.mocked(potterApi.get).mockRejectedValue(mockError);

      await expect(getAllCharacters()).rejects.toThrow('API Error');
      expect(potterApi.get).toHaveBeenCalledWith('characters');
      expect(potterApi.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCharacterInfo', () => {
    it('should fetch and return character info by name successfully', async () => {
      const characterName = 'harry-potter';
      const mockResponse = { data: mockCharacters[0] };
      vi.mocked(potterApi.get).mockResolvedValue(mockResponse);

      const result = await getCharacterInfo(characterName);

      expect(potterApi.get).toHaveBeenCalledWith(`characters/${characterName}`);
      expect(potterApi.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockCharacters[0]);
      expect(result.name).toBe('Harry Potter');
    });

    it('should handle API errors and re-throw them', async () => {
      const characterName = 'invalid-character';
      const mockError = new Error('Character not found');
      vi.mocked(potterApi.get).mockRejectedValue(mockError);

      await expect(getCharacterInfo(characterName)).rejects.toThrow(
        'Character not found'
      );
      expect(potterApi.get).toHaveBeenCalledWith(`characters/${characterName}`);
      expect(potterApi.get).toHaveBeenCalledTimes(1);
    });
  });
});

