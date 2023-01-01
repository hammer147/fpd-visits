'use client'

import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { useState } from 'react'

const Home = () => {
  const [extendedResult, updateExtendedResult] = useState(false)
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult },
    { immediate: true }
  )

  const reloadData = () => {
    getData({ ignoreCache: true })
  }

  const onChangeExtendedResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateExtendedResult(e.target.checked)
  }

  return (
    <div className='p-24 flex flex-col justify-center'>
      <h1>FingerprintJS Pro NextJS Demo</h1>
      <div className='p-5'>
        <div className='grid grid-flow-col items-center'>
          <button
            className='text-sm font-medium cursor-pointer bg-orange-600 text-white rounded'
            onClick={reloadData}
            type='button'>
            Reload data
          </button>
          <label>
            <input type='checkbox' onChange={onChangeExtendedResult} checked={extendedResult} />
            Extended result
          </label>
        </div>
        <h4>
          VisitorId:{' '}
          <span className='font-normal'>{isLoading ? 'Loading...' : data?.visitorId}</span>
        </h4>
        <h4>Full visitor data:</h4>
        <pre className='overflow-scroll'>
          {error ? error.message : JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Home
