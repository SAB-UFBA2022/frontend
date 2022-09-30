import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Sidebar from '../../../components/Sidebar/Admin'

export default function DiscenteLista() {
  const [bolsistas, setBolsistas] = useState([])

  const getList = async () => {
    try {
      const { data } = await axios.get(
        'https://aux-bolsistas-dev.herokuapp.com/v1/students/list/all'
      )
      setBolsistas(data)
    } catch (error) {
      toast.error('Erro ao carregar lista de usuários', { timeout: 1000 })
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Sidebar />
      <section className="mx-auto w-8/12 justify-end">
        <div className="shadow-base ml-12 w-[1100px] rounded-lg bg-white p-8">
          <div className="flex items-center gap-x-4">
            <div className="max-w-max rounded-md bg-yellow-500 p-3">
              <img src="/assets/icons/list.svg" alt="List" className="w-6" />
            </div>
            <h2 className="font-poppins text-3xl font-semibold text-gray-900">Discentes</h2>
          </div>
          <table className="mt-8 w-full border-separate border-spacing-4 ">
            <thead>
              <tr className="text-md text-left font-inter font-semibold leading-7 text-gray-600">
                <th>Nome</th>
                <th>E-mail</th>
                <th>Matrícula</th>
                <th>Curso</th>
                <th>Link Lattes</th>
              </tr>
            </thead>
            {bolsistas.map((bolsista) => {
              return (
                <tbody
                  key={bolsista.id}
                  className="text-left font-inter text-base leading-7 text-gray-600"
                >
                  <tr>
                    <td>
                      <span className="flex gap-x-2">
                        <img src="/assets/icons/person.svg" alt="Person" className="w-6" />{' '}
                        {bolsista.name}
                      </span>
                    </td>
                    <td>{bolsista.email}</td>
                    <td>{bolsista.enrolment_number}</td>
                    <td>{bolsista.course}</td>
                    <td>{bolsista.link_lattes}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      </section>
    </div>
  )
}
