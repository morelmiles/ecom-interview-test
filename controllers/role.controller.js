const Role = require("../models/Role");

const getRole = (req, res) => {
  const { roleId } = req.params;
  Role.findById(roleId).exec((err, role) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      role,
    });
  });
};

const getRoles = (req, res) => {
  Role.find({}).exec((err, roles) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      roles,
    });
  });
};

const createRole = (req, res) => {
  const newRole = new Role({
    name: req.body.name,
    status: req.body.status,
  });

  newRole.save((err, role) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      role,
    });
  });
};

const updateRole = (req, res) => {
  const { roleId } = req.params;

  Role.findByIdAndUpdate(roleId, req.body, { new: true }, (err, role) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      role,
    });
  });
};

const deleteRole = (req, res) => {
  const { roleId } = req.params;
  Role.findByIdAndRemove(roleId, (err, role) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      role,
    });
  });
};
