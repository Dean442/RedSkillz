export const schema = gql`
  type Skill {
    id: Int!
    name: String!
    field: String
  }

  type Query {
    skills: [Skill!]! @requireAuth
    skill(id: Int!): Skill @requireAuth
  }

  input CreateSkillInput {
    name: String!
    field: String
  }

  input UpdateSkillInput {
    name: String
    field: String
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill! @requireAuth
    updateSkill(id: Int!, input: UpdateSkillInput!): Skill! @requireAuth
    deleteSkill(id: Int!): Skill! @requireAuth
  }
`
