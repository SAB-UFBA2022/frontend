/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'

import { formatDate, formatPhone } from '../../../utils/formatters'
import Pagination from '../../Pagination'
import Loading from '../../Loading'
import { useAppContext } from '../../../context/appContext'

export default function StudentsList() {
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

  const columns = [
    {
      field: 'name',
      headerName: 'Nome Completo',
      width: 260,
      renderCell: (params) => (
        <div className="flex items-center gap-x-2 overflow-auto">
          <img src="/assets/icons/profile.svg" alt="Profile" />
          {params.row.name}
        </div>
      )
    },
    { field: 'course', headerName: 'Curso', width: 100 },
    {
      field: 'enrollment_number',
      headerName: 'Matrícula',
      width: 120
    },
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
    {
      field: 'email',
      headerName: 'E-mail',
      width: 220,
      renderCell: (params) => (
        <p className="flex items-center gap-x-2 overflow-auto">{params.row.email}</p>
      )
    },
    {
      field: 'phone_number',
      headerName: 'Telefone',
      width: 150,
      renderCell: (params) => formatPhone(params.row.phone_number)
    },
    {
      field: 'link_lattes',
      headerName: 'Lattes',
      width: 70,
      align: 'center',
      renderCell: (params) => (
        <a
          href={params.row.link_lattes}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Link
        </a>
      )
    },
    {
      field: 'active',
      headerName: 'Bolsa ativa',
      width: 100,
      align: 'center',
      renderCell: (params) =>
        params.row.scholarship.active ? (
          <p className="text-green-500">Sim</p>
        ) : (
          <p className="text-red-500">Não</p>
        )
    }
  ]

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ height: '675px', width: '100%', backgroundColor: 'white' }}>
          <DataGrid
            hideFooterPagination
            rows={students}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnMenu
            GridCellParams={students.scholarship}
            isRowSelectable={() => false}
            rowHeight={60}
            hideFooter
          />
        </div>
      )}
      <div className="mt-6">
        <Pagination />
      </div>
    </>
  )
}
