import type { FindEmployees } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Employees from 'src/components/Employee/Employees'

export const QUERY = gql`
  query FindEmployees {
    employees {
      id
      first_Name
      last_Name
      field
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employees yet. '}
      <Link
        to={routes.newEmployee()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ employees }: CellSuccessProps<FindEmployees>) => {
  return <Employees employees={employees} />
}
