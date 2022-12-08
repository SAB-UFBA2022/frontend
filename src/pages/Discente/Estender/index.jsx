import { useState, useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import Sidebar from '../../../components/Sidebar'
import Button from '../../../components/Button'
import Loading from '../../../components/Loading'
import Alert from '../../../components/Alert'

export default function DiscenteEstenderBolsa() {
  const { getStudentData, isLoading, students, extendEndDate, displayFormAlert, showAlert } =
    useAppContext()
  const [date, setDate] = useState('')

  useEffect(() => {
    getStudentData()
  }, [])

  const formatDate = (dt) => {
    if (!dt) return ''
    const newDate = new Date(dt)
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!date) {
      return displayFormAlert('Preencha a data de término da bolsa')
    }
    extendEndDate(students.scholarship.id, date)
    return setDate('')
  }

  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar userType="student" />
      <section className="flex w-full justify-center py-6">
        <div className="shadow-base flex h-max w-full flex-col items-center space-y-5 rounded-lg bg-white p-6 pb-16 md:w-10/12 2xl:max-w-[1280px]">
          <div className="mb-8 flex items-center gap-x-4 self-start">
            <div className="rounded-md bg-red-400 p-3">
              <img src="/assets/icons/plus.svg" alt="Plus" />
            </div>
            <h2 className="poppins text-xl font-semibold text-gray-900">Estender bolsa</h2>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full flex-col items-center space-y-5">
              {showAlert && <Alert />}
              <div className="h-24 w-52 space-y-2">
                <p className="text-center font-medium">Data do término da bolsa</p>
                <p className="w-52 rounded-lg border border-blue-500 px-10 py-3 text-center ">
                  {formatDate(students.scholarship?.scholarship_ends_at) || ''}
                </p>
              </div>
              <div className="flex h-24 flex-col items-center space-y-2">
                <p className="text-center font-medium">
                  Selecione uma nova data para término da bolsa
                </p>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-lg border border-blue-500 px-10 py-3"
                />
              </div>
              <Button type="submit" color="green" disabled={isLoading} loading={isLoading}>
                Salvar
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
