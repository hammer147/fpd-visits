import type { Visit } from '@prisma/client'
import { prisma } from '.'
import { getErrorMessage } from '@/lib/utils/error-message'

export async function getVisits() {
  try {
    const visits = await prisma.visit.findMany()
    return { visits }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}

export async function createVisit(visit: Visit) {
  try {
    const visitFromDB = await prisma.visit.create({ data: visit })
    return { visitFromDB }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}

export async function getVisitsByVisitorId(visitorId: Visit['visitorId']) {
  try {
    const visits = await prisma.visit.findMany({
      where: { visitorId },
      orderBy: { createdAt: 'desc' },
    })
    return { visits }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}
