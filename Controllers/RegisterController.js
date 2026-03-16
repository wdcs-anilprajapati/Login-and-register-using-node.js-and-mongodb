const Fields = require('./../Models/registerModle');
const catchAsync = require('./../utils/catchAsync');
// Make sure the filename case matches (appError vs AppError)
const appError = require('./../utils/appError'); 

exports.registerUser = catchAsync(async (req, res, next) => {
    const newuser = await Fields.create({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    res.status(201).json({
        status: 'sucess',
        mssg: 'hey signed in sucessfully',
        user: newuser
    })
})

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new appError('please provide a email and password ', 400))
    }
    const user = await Fields.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new appError('The email or password is incorrect ', 400))
    }

    res.status(201).json({
        status: 'sucess',
        mssg: 'You are logged in '
    })
}


