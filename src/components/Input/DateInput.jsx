import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateInput({ label, name, placeholder, patternErro, pattern, className }) {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="flex w-full max-w-[395px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800">
      <label htmlFor={name} className="text-base font-medium leading-7 text-gray-800">
        {label}
      </label>
      <div className="relative">
        <DatePicker
          id={name}
          placeholder={placeholder}
          name={name}
          selected={startDate}
          locale={ptBR}
          dateFormat="P"
          onChange={setStartDate}
          pattern={pattern}
          title={pattern ? patternErro : ''}
          className={
            `placeholder-gray-400::placeholder w-full rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500` +
            ` ${className}`
          }
        />
        <img
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform text-lg text-gray-500"
          src="/assets/icons/date.svg"
          alt="Calendar Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}
