export function Pre({ children, ...props }) {
  return (
    <pre
      {...props}
      className="overflow-auto p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
    >
      {children}
    </pre>
  )
}
