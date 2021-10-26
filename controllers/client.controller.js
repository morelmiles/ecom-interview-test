const Client = require("../models/Client");

const Controller = {};

Controller.createClient = (req, res) => {
  const newClient = new Client({
    displayName: req.body.displayName,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    status: req.body.status,
  });

  newClient.save((err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      client,
    });
  });
};

Controller.getClients = (req, res) => {
  Client.find({}).exec((err, clients) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      clients,
    });
  });
};

Controller.getClient = (req, res) => {
  const { clientId } = req.params;
  Client.findById(clientId).exec((err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      client,
    });
  });
};

Controller.updateClient = (req, res) => {
  const { clientId } = req.params;

  Client.findByIdAndUpdate(clientId, req.body, { new: true }, (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      client,
    });
  });
};

Controller.deleteClient = (req, res) => {
  const { clientId } = req.params;
  Client.findByIdAndRemove(clientId, (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      client,
    });
  });
};

module.exports = Controller;
