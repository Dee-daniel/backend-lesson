const express = require('express');
const router = express.Router ();

const {
    getEmployees, 
    getEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee,
} = require("../controller/employeeController");

router.route("/employees").get(getEmployees).post(getEmployee);
router.route("/employees/:id").get(updateEmployee).post(createEmployee).delete(deleteEmployee);

// router.get("/employees", getEmployees);
// router.post("/employees", createEmployee);
// router.get("/employees/:id", getEmployee);
// router.delete("/employees/:id", deleteEmployee);
// router.patch("/employees/:id", updateEmployee);

module.exports = router