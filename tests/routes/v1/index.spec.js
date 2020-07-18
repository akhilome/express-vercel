const app = require('../../../app');
const request = require('supertest');

describe('V1 Root', () => {
  it('GET /v1/', async () => {
    const response = await request(app).get('/v1/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: 'v1 path live 🔥',
      data: null
    });
  });
});
