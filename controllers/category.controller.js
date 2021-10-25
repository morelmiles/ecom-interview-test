const Category = require("./../models/Category");

const getCategories = (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      categories,
    });
  });
};

const getCategory = (req, res) => {
  const { categoryId } = req.params;
  Category.findById(categoryId).exec((err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      category,
    });
  });
};

const createCategory = (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  });

  console.log(newCategory);
  newCategory.save((err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      category,
    });
  });
};

const updateCategory = (req, res) => {
  const { categoryId } = req.params;

  Category.findByIdAndUpdate(
    categoryId,
    req.body,
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        category,
      });
    }
  );
};

const deleteCategory = (req, res) => {
  const { categoryId } = req.params;

  Category.findByIdAndRemove(categoryId, (err, category) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      category,
    });
  });
};

export default {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
