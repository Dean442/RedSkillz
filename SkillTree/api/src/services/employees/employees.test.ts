import {
  employees,
  employee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employees'
import type { StandardScenario } from './employees.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employees', () => {
  scenario('returns all employees', async (scenario: StandardScenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })

  scenario('returns a single employee', async (scenario: StandardScenario) => {
    const result = await employee({ id: scenario.employee.one.id })

    expect(result).toEqual(scenario.employee.one)
  })

  scenario('creates a employee', async () => {
    const result = await createEmployee({
      input: { first_Name: 'String', last_Name: 'String', field: 'String' },
    })

    expect(result.first_Name).toEqual('String')
    expect(result.last_Name).toEqual('String')
    expect(result.field).toEqual('String')
  })

  scenario('updates a employee', async (scenario: StandardScenario) => {
    const original = await employee({ id: scenario.employee.one.id })
    const result = await updateEmployee({
      id: original.id,
      input: { first_Name: 'String2' },
    })

    expect(result.first_Name).toEqual('String2')
  })

  scenario('deletes a employee', async (scenario: StandardScenario) => {
    const original = await deleteEmployee({ id: scenario.employee.one.id })
    const result = await employee({ id: original.id })

    expect(result).toEqual(null)
  })
})
