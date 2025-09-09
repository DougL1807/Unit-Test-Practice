const { validateInput, formatResponse, calculateCost } = require('./aiHelpers');

describe('AI Helper Functions', () => {
  describe('validateInput', () => {
    test('should accept valid input', () => {
      const result = validateInput('Hello AI');
      expect(result.valid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    test('should reject empty input', () => {
      expect(validateInput('').valid).toBe(false);
      expect(validateInput('   ').valid).toBe(false);
      expect(validateInput(null).valid).toBe(false);
    });

    test('should reject input that is too long', () => {
      const longInput = 'a'.repeat(1001);
      const result = validateInput(longInput);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('too long');
    });
  });

  describe('formatResponse', () => {
    test('should format response with all fields', () => {
      const input = { text: 'Hello!', tokens: 5 };
      const result = formatResponse(input);
      
      expect(result).toHaveProperty('message', 'Hello!');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('tokens', 5);
      expect(typeof result.timestamp).toBe('number');
    });

    test('should handle missing fields', () => {
      const result = formatResponse({});
      expect(result.message).toBe('');
      expect(result.tokens).toBe(0);
    });
  });

  describe('calculateCost', () => {
    test('should calculate cost correctly', () => {
      expect(calculateCost(1000)).toBe(0.1);
      expect(calculateCost(500)).toBe(0.05);
      expect(calculateCost(1)).toBe(0.0001);
    });

    test('should handle custom price per token', () => {
      expect(calculateCost(1000, 0.0002)).toBe(0.2);
    });
  });
});