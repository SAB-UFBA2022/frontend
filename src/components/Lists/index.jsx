/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { DataGrid, ptBR, GridToolbar } from '@mui/x-data-grid'

import { formatDate, formatPhone } from '../../utils/formatters'
import Loading from '../Loading'
import { useAppContext } from '../../context/appContext'

export default function StudentsList({ listType }) {
  const { getStudents, getExpiredStudents, getStudentsEndDate, students, isLoading } =
    useAppContext()

  useEffect(() => {
    switch (listType) {
      case 'todos':
        getStudents()
        break
      case 'finalizacao':
        getStudentsEndDate()
        break
      case 'expirado':
        getExpiredStudents()
        break
      default:
        getStudents()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listType])

  const columns = [
    /* {
      field: 'edit',
      headerName: 'Editar',
      width: 80,
      filterable: true,
      renderCell: () => <img src="/assets/icons/edit.svg" alt="Editar estudante" />
    }, */
    {
      field: 'name',
      headerName: 'Nome completo',
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
      headerName: 'Data de matrícula',
      width: 150,
      renderCell: (params) => formatDate(params.row.enrollment_date_pgcomp)
    },
    {
      field: 'scholarship_starts_at',
      headerName: 'Início da bolsa',
      width: 120,
      renderCell: (params) => formatDate(params.row.scholarship.scholarship_starts_at)
    },
    {
      field: 'scholarship_ends_at',
      headerName: 'Fim da bolsa',
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
      renderCell: (params) => <p className="overflow-auto">{params.row.email}</p>
    },
    {
      field: 'phone_number',
      headerName: 'Telefone',
      width: 150,
      renderCell: (params) => (
        <a
          href={`https://wa.me/${params.row.phone_number}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          {formatPhone(params.row.phone_number)}
        </a>
      )
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
    }
  ]

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ height: 'auto', width: '100%', backgroundColor: 'white' }}>
          <DataGrid
            rows={students}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            disableColumnMenu
            components={{ Toolbar: GridToolbar }}
            GridCellParams={students.scholarship}
            isRowSelectable={() => false}
            rowHeight={45}
            autoHeight
            disableDensitySelector
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
      )}
    </div>
  )
}
