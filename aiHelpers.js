// Simple functions you might have in an AI app
function validateInput(input) {
  if (!input || input.trim().length === 0) {
    return { valid: false, error: 'Input cannot be empty' };
  }
  if (input.length > 1000) {
    return { valid: false, error: 'Input too long' };
  }
  return { valid: true };
}

function formatResponse(response) {
  return {
    message: response.text || '',
    timestamp: Date.now(),
    tokens: response.tokens || 0
  };
}

function calculateCost(tokens, pricePerToken = 0.0001) {
  return parseFloat((tokens * pricePerToken).toFixed(4));
}

module.exports = { validateInput, formatResponse, calculateCost };