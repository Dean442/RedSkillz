export const schema = gql`
  type Employee {
    id: Int!
    first_Name: String!
    last_Name: String!
    field: String!
  }

  type Query {
    employees: [Employee!]! @requireAuth
    employee(id: Int!): Employee @requireAuth
  }

  input CreateEmployeeInput {
    first_Name: String!
    last_Name: String!
    field: String!
  }

  input UpdateEmployeeInput {
    first_Name: String
    last_Name: String
    field: String
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee! @requireAuth
    updateEmployee(id: Int!, input: UpdateEmployeeInput!): Employee!
      @requireAuth
    deleteEmployee(id: Int!): Employee! @requireAuth
  }
`
