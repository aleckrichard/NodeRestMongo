const {Router} = require('express')

const router = Router()

const employeescontroller = require('../controllers/employees.controller')

//CRUD

router.get('/', employeescontroller.getEmployees)
router.post('/', employeescontroller.createEmployee)
router.get('/:id', employeescontroller.getEmployee)
router.put('/:id', employeescontroller.editEmployee)
router.delete('/:id', employeescontroller.deleteEmployee)



module.exports = router