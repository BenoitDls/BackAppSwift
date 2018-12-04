const Thing = require('../models/Thing')


module.exports = {
    index: (req, res) => {
        Thing.find({}, (error, things) => {
            if (error) {
                throw error;
            }
            res.json(things);
        });
    },
    delete: (req, res) => {
        Thing.findById(req.params.id, (error, thing) => {
            if (error) {
                throw error;
            }
            thing.remove((error) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Thing successfully deleted!"})
            });
        });
    },
    update: (req, res) => {
        Thing.findById(req.params.id, (error, thing) => {
            if (error) {
                throw error;
            }
            thing.name = req.body.name;
            thing.description = req.body.description;
            thing.type = req.body.type;
            thing.warning_low = req.body.warning_low;
            thing.warning_high = req.body.warning_high;
            thing.measure_unit = req.body.measure_unit;
            thing.value = req.body.value;
            thing.date = req.body.date;
            
            thing.save((error, thing) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Thing successfully updated!"})
            });
        });
    }
}