'use client'

import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { Visit } from '@prisma/client'
import { useEffect, useState } from 'react'
import Table from './table'

// export type Visit = {
//   createdAt: string
//   visitorId: string
//   browserName: string
//   incognito: boolean
//   ip: string
//   city: string
//   os: string
// }

const Home = () => {
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  )

  const [dataFromDB, setDataFromDB] = useState<Visit[]>([])

  useEffect(() => {
    if (data) {
      ;(async () => {
        const response = await fetch('/api/visits', {
          method: 'POST',
          // headers: {},
          body: JSON.stringify({
            visitorId: data.visitorId,
            browserName: data.browserName,
            incognito: data.incognito,
            ip: data.ip,
            city: data.ipLocation?.city?.name,
            os: data.os
          })
        })
        const responseData = await response.json()
        setDataFromDB(responseData.visits)
      })()
    }
  }, [data])

  console.log({ dataFromDB })

  return (
    <div className='max-w-6xl m-auto p-24 flex flex-col justify-center'>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
        Fingerprinted Visits
      </h1>
      <div className='bg-white p-5 border-2 rounded-md border-orange-600 shadow-md shadow-orange-600'>
        <h4 className='text-xl font-bold my-1'>
          VisitorId:{' '}
          <span className='font-normal'>{isLoading ? 'Loading...' : data?.visitorId}</span>
        </h4>
        <h4 className='text-xl font-bold my-1'>Visit history:</h4>
        {dataFromDB.length > 0 && <Table visits={dataFromDB} />}
        

        {/* <pre className=''>{error ? error.message : JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default Home
