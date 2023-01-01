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
    <div className='max-w-6xl m-auto p-24 flex flex-col justify-center'>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
        FingerprintJS Pro NextJS Demo
      </h1>
      <div className='bg-white p-5 border-2 rounded-md border-orange-600 shadow-md shadow-orange-600'>
        <div className='mb-4 flex items-center'>
          <button
            className='p-2 text-sm font-medium cursor-pointer bg-orange-600 text-white rounded'
            onClick={reloadData}
            type='button'>
            Reload data
          </button>
          <label className='mx-6'>
            <input
              className='mx-1'
              type='checkbox'
              onChange={onChangeExtendedResult}
              checked={extendedResult}
            />
            Extended result
          </label>
        </div>
        <h4 className='text-xl font-bold my-1'>
          VisitorId:{' '}
          <span className='font-normal'>{isLoading ? 'Loading...' : data?.visitorId}</span>
        </h4>
        <h4 className='text-xl font-bold my-1'>Full visitor data:</h4>
        <pre className=''>
          {error ? error.message : JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Home
