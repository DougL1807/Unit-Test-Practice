describe('Jest Key Concepts', () => {
  // Grouping related tests
  describe('String functions', () => {
    test('should check string content', () => {
      const message = 'Hello World';
      
      expect(message).toContain('World');        // Contains substring
      expect(message).toMatch(/Hello/);          // Matches regex
      expect(message).toHaveLength(11);          // Length check
    });
  });

  describe('Arrays and Objects', () => {
    test('should test array properties', () => {
      const users = ['Alice', 'Bob', 'Charlie'];
      
      expect(users).toHaveLength(3);
      expect(users).toContain('Bob');
      expect(users[0]).toBe('Alice');
    });

    test('should test object properties', () => {
      const user = { name: 'Alice', age: 25, active: true };
      
      expect(user).toHaveProperty('name');
      expect(user.name).toBe('Alice');
      expect(user).toEqual({ name: 'Alice', age: 25, active: true });
    });
  });

  describe('Async operations', () => {
    // Promise that resolves
    const fetchUser = () => Promise.resolve({ id: 1, name: 'Alice' });
    
    // Promise that rejects
    const fetchError = () => Promise.reject(new Error('Network error'));

    test('should handle successful async operation', async () => {
      const user = await fetchUser();
      expect(user).toEqual({ id: 1, name: 'Alice' });
    });

    test('should handle failed async operation', async () => {
      await expect(fetchError()).rejects.toThrow('Network error');
    });
  });
});