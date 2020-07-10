const app = require('../../../app');
const request = require('supertest');

describe('Echo Route', () => {
  const BASE_PATH = '/v1/echo';

  describe('GET /v1/echo/:name', () => {
    it('should respond correctly with name', async () => {
      const response = await request(app).get(`${BASE_PATH}/tester`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        message: 'Hello, Tester!',
        data: null
      });
    });

    it('should respond correctly with data', async () => {
      const response = await request(app).get(
        `${BASE_PATH}/phoebe?artist=Aubrey&song=Deep%20Pockets&mood=Swell`
      );

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Hello, Phoebe!');
      expect(response.body.data).toEqual({
        artist: 'Aubrey',
        song: 'Deep Pockets',
        mood: 'Swell'
      });
    });
  });

  describe('POST /v1/echo/:name', () => {
    it('should respond correctly with name', async () => {
      const response = await request(app).post(`${BASE_PATH}/bronsolino`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        message: 'Hello, Bronsolino!',
        data: null
      });
    });

    it('should respond correctly with data', async () => {
      const response = await request(app).post(
        `${BASE_PATH}/oaxaca?motto=God%20no%20go%20shame%20us`
      );

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Hello, Oaxaca!');
      expect(response.body.data).toEqual({
        motto: 'God no go shame us'
      });
    });
  });
});
