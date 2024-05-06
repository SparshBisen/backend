import multer from 'multer';    // https://github.com/expressjs/multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public.temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)   // this wil upload the same name as it was given by user.
    }
  })
  
  export const upload = multer({ 
    storage: storage 
})
  