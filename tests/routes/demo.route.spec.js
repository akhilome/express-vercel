const app = require('../../app');
const request = require('supertest');

describe('Demo Endpoint', () => {
  it('GET /demo', async () => {
    const response = await request(app).get('/demo');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: 'demo path live 🚀',
      data: null
    });
  });
});
