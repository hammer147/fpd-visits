import type { NextApiRequest, NextApiResponse } from 'next'
import { createVisit, getVisits, getVisitsByVisitorId } from '@/lib/prisma/visits'
import { getErrorMessage } from '@/lib/utils/error-message'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { visits, errorMsg } = await getVisits()
      if (errorMsg) throw new Error(errorMsg)
      return res.status(200).json({ visits })
    } catch (error) {
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body)
      const { visitFromDB, errorMsg } = await createVisit(data)
      if (errorMsg) throw new Error(errorMsg)
      const { visits, errorMsg: errorMsg2 } = await getVisitsByVisitorId(visitFromDB!.visitorId)
      if (errorMsg2) throw new Error(errorMsg2)
      return res.status(200).json({ visits })
    } catch (error) {
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
