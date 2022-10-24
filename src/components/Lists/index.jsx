import { useAppContext } from '../../context/appContext'
import Dropdown from '../Dropdown'

export default function FilterContainer() {
  const {
    isLoading,
    scholarshipDate,
    scholarshipOptions,
    courseType,
    courseOptions,
    sort,
    sortOptions,
    handleChange
  } = useAppContext()

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value, id: e.target.id })
  }

  return (
    <div className="mb-12 w-full rounded-lg bg-white p-8 shadow-sm lg:w-10/12">
      <form>
        <h2 className="mb-4 text-center font-poppins text-xl font-semibold text-gray-900 md:text-left">
          Filtro de pesquisa
        </h2>
        <div className="grid grid-flow-col grid-cols-1 grid-rows-3 place-items-center gap-x-2 gap-y-4 xl:grid-flow-dense xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-4">
          <Dropdown
            label="Curso"
            id="course"
            name="courseType"
            value={courseType}
            handleChange={handleSearch}
            list={['-', ...courseOptions]}
          />
          <Dropdown
            label="Tempo de bolsa"
            id="scholarship"
            name="scholarshipDate"
            value={scholarshipDate}
            handleChange={handleSearch}
            list={['-', ...scholarshipOptions]}
          />
          <Dropdown
            label="Ordenar"
            id="sort"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={['-', ...sortOptions]}
          />
        </div>
      </form>
    </div>
  )
}
