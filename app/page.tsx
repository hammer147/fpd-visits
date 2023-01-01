'use client'

import styles from './page.module.css'
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
    <div className={styles.container}>
      <h1>FingerprintJS Pro NextJS Demo</h1>
      <div className={styles.testArea}>
        <div className={styles.controls}>
          <button onClick={reloadData} type='button'>
            Reload data
          </button>
          <label>
            <input type='checkbox' onChange={onChangeExtendedResult} checked={extendedResult} />
            Extended result
          </label>
        </div>
        <h4>
          VisitorId:{' '}
          <span className={styles.visitorId}>{isLoading ? 'Loading...' : data?.visitorId}</span>
        </h4>
        <h4>Full visitor data:</h4>
        <pre className={styles.data}>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Home
