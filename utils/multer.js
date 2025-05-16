const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const fileType = /pdf|doc|docx/;
    const extnamae = fileType.test(
      file.originalname.toLocaleLowerCase().split(".").pop()
    );
    if (extnamae) {
      return cb(null, true);
    }
    cb(new Error("Only PDF or Word documents are allowed!"));
  },
});

module.exports = upload;
