const app = require('../app');
const request = require('supertest');

describe('App Entry Point', () => {
  it('should respond appropriately', async () => {
    const response = await request(app).post('/nonexistent-endpoint');

    expect(response.status).toBe(404);
  });
});
