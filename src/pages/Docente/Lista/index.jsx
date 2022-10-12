/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'

import Filter from '../../../components/Filter'
import Paginacao from '../../../components/Paginacao'
import Loading from '../../../components/Loading'
import Sidebar from '../../../components/Sidebar/Docente'
import { useAppContext } from '../../../context/appContext'

export default function DiscenteLista() {
  const {
    getStudents,
    students,
    isLoading,
    currentPage,
    allItems,
    courseType,
    scholarshipDate,
    sort,
    selectedItem
  } = useAppContext()

  const [viewList, setViewList] = useState(false)

  useEffect(() => {
    switch (selectedItem) {
      case 'course':
        getStudents(selectedItem, courseType)
        break
      case 'scholarship':
        getStudents(selectedItem, scholarshipDate)
        break
      case 'sort':
        getStudents(selectedItem, sort)
        break
      default:
        getStudents('all', '-')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, allItems, courseType, scholarshipDate, sort])

  const formatDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR')
  }

  const formatType = (type) => {
    if (type === 'course' && courseType !== '-') {
      return courseType
    }
    if (type === 'scholarship' && scholarshipDate !== '-') {
      return scholarshipDate
    }
    if (type === 'sort' && sort !== '-') {
      return sort
    }
    return 'Todos'
  }

  const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }

  const columns = [
    { field: 'name', headerName: 'Nome Completo', width: 190 },
    { field: 'course', headerName: 'Curso', width: 100 },
    {
      field: 'phone_number',
      headerName: 'Telefone',
      width: 150,
      renderCell: (params) => formatPhone(params.row.phone_number)
    },
    { field: 'enrollment_number', headerName: 'Matrícula', width: 120 },
    {
      field: 'enrollment_date_pgcomp',
      headerName: 'Data de Matrícula',
      width: 150,
      renderCell: (params) => formatDate(params.row.enrollment_date_pgcomp)
    },
    {
      field: 'scholarship_starts_at',
      headerName: 'Início da Bolsa',
      width: 120,
      renderCell: (params) => formatDate(params.row.scholarship.scholarship_starts_at)
    },
    {
      field: 'scholarship_ends_at',
      headerName: 'Fim da Bolsa',
      width: 120,
      renderCell: (params) => formatDate(params.row.scholarship.scholarship_ends_at)
    },
    {
      field: 'defense_prediction',
      headerName: 'Previsão de defesa',
      width: 150,
      renderCell: (params) => formatDate(params.row.defense_prediction)
    },
    { field: 'link_lattes', headerName: 'Lattes', width: 100 }
  ]

  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar />
      <section className="w-full py-6 md:ml-auto md:max-w-[70vw] xl:max-w-[80vw]">
        <Filter />
        <div className="shadow-base mb-6 w-full space-y-8 lg:w-10/12">
          {isLoading ? (
            <Loading />
          ) : (
            <div style={{ height: 650, width: '100%' }}>
              <DataGrid
                hideFooterPagination
                rows={students}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableColumnMenu
                GridCellParams={students.scholarship}
              />
            </div>
          )}
          <Paginacao />
        </div>
      </section>
    </div>
  )
}
