import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeeCreateArgs>({
  employee: {
    one: {
      data: { first_Name: 'String', last_Name: 'String', field: 'String' },
    },
    two: {
      data: { first_Name: 'String', last_Name: 'String', field: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
