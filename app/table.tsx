import { Visit } from '@prisma/client'

type Props = {
  visits: Visit[]
}

const Table = ({ visits }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='p-1.5 w-full inline-block align-middle'>
          <div className='overflow-hidden border rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    Time
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    Incognito
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    Browser
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    IP
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    City
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>
                    OS
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {visits.map((visit, idx) => (
                  <tr key={visit.id}>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visits.length - idx}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.createdAt.toLocaleString()}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.incognito ? 'Yes' : 'No'}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.browserName}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.ip}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.city}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {visit.os}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Table
