// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import EmployeesLayout from 'src/layouts/EmployeesLayout'
import SkillsLayout from 'src/layouts/SkillsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EmployeesLayout}>
        <Route path="/employees/new" page={EmployeeNewEmployeePage} name="newEmployee" />
        <Route path="/employees/{id:Int}/edit" page={EmployeeEditEmployeePage} name="editEmployee" />
        <Route path="/employees/{id:Int}" page={EmployeeEmployeePage} name="employee" />
        <Route path="/employees" page={EmployeeEmployeesPage} name="employees" />
      </Set>
      <Set wrap={SkillsLayout}>
        <Route path="/skills/new" page={SkillNewSkillPage} name="newSkill" />
        <Route path="/skills/{id:Int}/edit" page={SkillEditSkillPage} name="editSkill" />
        <Route path="/skills/{id:Int}" page={SkillSkillPage} name="skill" />
        <Route path="/skills" page={SkillSkillsPage} name="skills" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
