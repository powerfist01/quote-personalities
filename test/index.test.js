// test/index.test.js
const { generateRandomQuote } = require('../index');
const { getRandomQuote } = require('../quotes');

jest.mock('../quotes', () => ({
  getRandomQuote: jest.fn(() => ({ quote: 'Mocked Quote', meaning: 'Mocked Meaning', author: 'Mocked Author' }))
}));

describe('generateRandomQuote', () => {
  it('should generate a random quote string', () => {
    // Arrange
    getRandomQuote.mockReturnValueOnce({ quote: 'Test Quote', meaning: 'Test Meaning', author: 'Test Author' });
    
    // Act
    const result = generateRandomQuote();

    // Assert
    expect(result).toBe('Test Quote - Test Author');
  });
});
