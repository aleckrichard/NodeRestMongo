const hello = (req, res) => {
    res.send('Hola Mundo')
}

const employeescontroller = {}

const Employee = require('../models/Employee')

employeescontroller.getEmployees = async (req, res) => {
    const employes = await Employee.find()
    res.json(employes)
}
employeescontroller.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body) //Obtiene un json desde el frontend
    await newEmployee.save() //guarda el json en Mongo

    res.send('Empleado Creado: '+ newEmployee)
}

employeescontroller.getEmployee = async (req, res) => {
    const id = req.params.id
    const employee = await Employee.findById(id)
    res.send(employee)
}

employeescontroller.editEmployee = async (req, res) => {
    const id = req.params.id
    await Employee.findByIdAndUpdate(id, req.body)
    res.json({status: 'Empleado Actualizado '})
}

employeescontroller.deleteEmployee = async(req, res) => {
    const id = req.params.id
    await Employee.findByIdAndDelete(id)
    res.json({status: 'Empleado con ID '+ id + ' Eliminado'})

}


module.exports =  employeescontroller