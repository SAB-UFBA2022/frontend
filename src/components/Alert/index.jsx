import { useAppContext } from '../../context/appContext'

export default function Alert() {
  const { alertType, alertText } = useAppContext()
  return (
    <div
      role="alert"
      className={`${
        alertType === 'error'
          ? 'border border-red-200 bg-red-50 text-red-800'
          : 'border border-green-200 bg-green-50 text-green-800'
      } flex w-full justify-center rounded-lg px-4 py-2 font-inter font-medium`}
    >
      {alertText}
    </div>
  )
}
