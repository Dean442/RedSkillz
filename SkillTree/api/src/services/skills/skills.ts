import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const skills: QueryResolvers['skills'] = () => {
  return db.skill.findMany()
}

export const skill: QueryResolvers['skill'] = ({ id }) => {
  return db.skill.findUnique({
    where: { id },
  })
}

export const createSkill: MutationResolvers['createSkill'] = ({ input }) => {
  return db.skill.create({
    data: input,
  })
}

export const updateSkill: MutationResolvers['updateSkill'] = ({
  id,
  input,
}) => {
  return db.skill.update({
    data: input,
    where: { id },
  })
}

export const deleteSkill: MutationResolvers['deleteSkill'] = ({ id }) => {
  return db.skill.delete({
    where: { id },
  })
}
