export function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th
      key={index}
      className="px-6 py-4 text-left text-sm font-bold tracking-wider text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 uppercase"
    >
      {header}
    </th>
  ))

  const renderCell = (content: React.ReactNode) => {
    if (typeof content === 'string') {
      if (content.startsWith('`') && content.endsWith('`')) {
        return (
          <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm">
            {content.slice(1, -1)}
          </code>
        )
      }
      return content
    }

    return content
  }

  const rows = data.rows.map((row, index) => (
    <tr
      key={index}
      className={`
        hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors
        ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}
      `}
    >
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words"
        >
          {renderCell(cell)}
        </td>
      ))}
    </tr>
  ))

  return (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full table-fixed">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rows}
        </tbody>
      </table>
    </div>
  )
}
