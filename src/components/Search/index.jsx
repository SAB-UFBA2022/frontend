import { useAppContext } from '../../context/appContext'
import Dropdown from '../Dropdown'
import Input from '../Input/FormInput'

export default function SearchContainer() {
  const { isLoading, search, searchStatus, searchType, sort, clearFilters, sortOptions } =
    useAppContext()
  const handleSearch = () => {
    if (isLoading) return true
    return false
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <div className="mx-auto my-12 w-9/12 rounded-lg bg-white p-8 shadow-sm">
      <form>
        <h2 className="mb-4 font-poppins text-xl font-semibold text-gray-900">
          Formulário de pesquisa
        </h2>
        <div className="grid grid-cols-2 place-items-center gap-y-8 gap-x-2">
          <Input
            type="text"
            label="Buscar"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <Dropdown
            label="Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['Todos', 'Tutor', 'Bolsista']}
          />
          {/* search by type */}
          <Dropdown
            label="Curso"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['Todos', 'Mestrado', 'Doutorado']}
          />
          {/* sort */}
          <Dropdown
            label="Ordenar"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            type="button"
            className="col-span-2 flex h-12 w-full max-w-[395px] items-center justify-center rounded-lg bg-blue-500 text-base font-semibold leading-6 text-white transition-colors duration-300 ease-in hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-200"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Limpar filtros
          </button>
        </div>
      </form>
    </div>
  )
}
