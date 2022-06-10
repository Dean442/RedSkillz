import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EmployeeLayoutProps = {
  children: React.ReactNode
}

const EmployeesLayout = ({ children }: EmployeeLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.employees()}
            className="rw-link"
          >
            Employees
          </Link>
        </h1>
        <Link
          to={routes.newEmployee()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Employee
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EmployeesLayout
