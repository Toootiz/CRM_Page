const Donaciones = require('../models/donaciones');

// Obtener todos los posts
exports.getAllDonaciones = async (req, res) => {
    if ("_sort" in req.query) { // List
        let sortBy = req.query._sort;
        let sortOrder = req.query._order === "ASC" ? 1 : -1;
        let start = Number(req.query._start);
        let end = Number(req.query._end);
        let sorter = {};
        sorter[sortBy] = sortOrder;
        let data = await Donaciones.find().sort(sorter).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        data = data.slice(start, end);
        res.json(data);
    } else if ("id" in req.query) { // Many
        let data = [];
        for (let index = 0; index < req.query.id.length; index++) {
            let dbData = await Donaciones.find({id: Number(req.query.id[index])}).project({_id: 0}).toArray();
            data = data.concat(dbData);
        }
        res.json(data);
    } else { // Reference
        let data = await Donaciones.find(req.query).project({_id: 0}).toArray();
        res.set("Access-Control-Expose-Headers", "X-Total-Count");
        res.set("X-Total-Count", data.length);
        res.json(data);
    }
};

exports.getOneDonacion = async (req, res) => {
    let data = await Donaciones.find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
};

exports.createDonacion = async (req, res) => {
    let addValues = req.body;
    let data = await Donaciones.find({}).toArray();
    let id = data.length + 1;
    addValues["id"] = id;
    data = await Donaciones.insertOne(addValues);
    res.json(data);
};

exports.updateDonacion = async (req, res) => {
    let addValues = req.body;
    addValues["id"] = Number(req.params.id);
    let data = await Donaciones.updateOne({id: addValues["id"]}, {"$set": addValues});
    data = await Donaciones.find({id: Number(req.params.id)}).project({_id: 0}).toArray();
    res.json(data[0]);
};

exports.deleteDonacion = async (req, res) => {
    let data = await Donaciones.deleteOne({id: Number(req.params.id)})
    res.json(data);
}