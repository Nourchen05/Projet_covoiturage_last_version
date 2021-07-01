const { check, validationResult } = require("express-validator")


//Registration Rules
exports.registerRules = () =>
    [
        //firstname rules
        check("firstname", "Veuillez ajouter votre prénom").notEmpty(),
        //lastname rules 
        check('lastname',"Veuillez ajouter votre nom").notEmpty(),
        //Gender rules 
        check('gender',"Veuillez ajouter votre sexe").notEmpty(),
        //email rules
        check("email", "Veuillez ajouter votre email").notEmpty(),
        check("email").isEmail().withMessage("Votre Email n'est pas valide"),
        // password rules
        check("password", "Veuillez ajouter votre mot de passe").notEmpty(), 
        check('password').isLength({
            min:6, 
            max:24
        }).withMessage('Mot de passe doit avoir 6 caratéres min'),
        check('password').matches(/^(?=.*[a-z])/).withMessage('Mot de passe doit avoir une lettre miniscule'),
        check('password').matches(/^(?=.*[A-Z])/).withMessage('Mot de passe doit avoir une lettre majuscule'),
        check('password').matches(/^(?=.*[0-9])/).withMessage('Mot de passe doit avoir un chiffre')
    ]

//Login Rules
exports.loginRules = ()=> [
    //email rules 
    check('email',"Veuillez ajouter votre email").notEmpty(),
    //password rules 
    check('password','Veuillez ajouter votre mot de passe').notEmpty()
]


exports.Validation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array().map((el) => ({ message: el.msg })) })
    }
    next()
}