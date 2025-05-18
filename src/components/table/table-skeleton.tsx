export function TableSkeleton() {
  const rows = 6;
  const columns = 6;

  return (
    <div>
      {/* Title */}
      <div className="ml-2 mb-2 h-4 bg-gray-300 dark:bg-stone-700 rounded animate-pulse w-40"></div>
      <div className="border border-border rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-divide">
          <thead>
            <tr>
              {[...Array(columns)].map((_, i) => (
                <th
                  key={i}
                  className="px-6 py-1.5 text-left text-xs font-medium text-gray-500 dark:text-stone-400 whitespace-nowrap"
                >
                  <div className="flex items-center space-x-2">
                    {/* Icon  */}
                    {i !== columns - 1 && (
                      <div className="h-3 w-3 bg-gray-300 dark:bg-stone-700 rounded-full animate-pulse flex-shrink-0"></div>
                    )}
                    {/* Header */}
                    <div
                      className={`h-4 bg-gray-300 dark:bg-stone-700 rounded animate-pulse ${
                        i === columns - 1 ? "w-5 mx-auto" : "w-20"
                      }`}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-table divide-y divide-divide">
            {[...Array(rows)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(columns)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm"
                  >
                    {colIndex === columns - 1 ? (
                      // Action
                      <div className="flex justify-center">
                        <div className="h-8 w-8 bg-gray-300 dark:bg-stone-700 rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <div
                        className="h-4 bg-gray-300 dark:bg-stone-700 rounded animate-pulse"
                        style={{
                          width: `${Math.floor(Math.random() * 50) + 50}%`,
                        }}
                      ></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
