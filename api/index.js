const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'api up' });
});

router.get('/demo', (req, res) => {
  res.json({ success: true, message: ':)' });
});

module.exports = router;
