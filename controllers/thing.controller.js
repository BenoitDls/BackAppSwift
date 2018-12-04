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
    },
    create: (req, res) => {
        const name = req.body.name;
        const description = req.body.description;
        const type = req.body.type;
        const warning_low = req.body.warning_low;
        const warning_high = req.body.warning_high;
        const measure_unit = req.body.measure_unit;
        const value = req.body.value;
        const date = req.body.date;

        const thing = new Thing({
            name,
            description,
            type,
            warning_low,
            warning_high,
            measure_unit,
            value,
            date
        });
        thing.save((error) => {
            if (error) {
                console.log("Error on thing");
            }
            res.send({message: "Thing successfully created!"})
        });
    }
}