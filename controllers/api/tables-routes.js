const router = require('express').Router();

const { Guest } = require('../../models');

// get all guests by eventId
router.get('/:eventId', async (req, res) => {
  try {
    const tableData = await Guest.findAll({
      where: {
        eventId: req.params.eventId
      }
    });
    res.status(200).json(tableData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets all guest by table number

router.get('/:eventId/:tableNum', async (req, res) => {
  try {
    const tableData = await Guest.findAll({
      where: {
        eventId: req.params.eventId,
        tableNumber: req.params.tableNum
      }
    });

    if (tableData.length > 0) {
      res.status(200).json(tableData);
    } else {
      res.status(400).json({ message: 'Either table or event is incorrect. Please verify that you entered the right information' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:eventId/update', async (req, res) => {
  try {
    console.log('req.body:', req.body);
    const guestData = await Guest.update(req.body,
      {
        where: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          eventId: req.params.eventId
        }
      });
    if (guestData.length > 0) {
      res.status(200).json(guestData);
    } else {
      res.status(400).json({ message: 'no user was found' });
    };
  } catch (err) {
    res.status(500).json(err);
    console.log('err:', err);
  }
});

module.exports = router;
