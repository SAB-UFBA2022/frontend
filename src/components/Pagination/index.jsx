import { useAppContext } from '../../context/appContext'

export default function Pagination() {
  const { totalPages, currentPage, changePage } = useAppContext()

  const pages = Array.from({ length: totalPages }, (_, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = currentPage + 1
    if (newPage > totalPages) {
      newPage = 1
    }
    changePage(newPage)
  }
  const prevPage = () => {
    let newPage = currentPage - 1
    if (newPage < 1) {
      newPage = totalPages
    }
    changePage(newPage)
  }
  return (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="rounded-md bg-blue-200 p-2 text-white transition-colors ease-in hover:bg-blue-500"
        onClick={prevPage}
      >
        <img src="/assets/icons/previous.svg" alt="Previous" />
      </button>
      <div className="flex gap-x-2 text-lg">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === currentPage ? 'text-blue-500' : 'text-gray-800'}
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        className="rounded-md bg-blue-200 p-2 text-white transition-colors ease-in hover:bg-blue-500"
        onClick={nextPage}
      >
        <img src="/assets/icons/next.svg" alt="Next" />
      </button>
    </div>
  )
}
