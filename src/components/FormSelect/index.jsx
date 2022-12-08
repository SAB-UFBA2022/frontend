import { useRef, useState } from 'react'

export default function FormSelect({
  label,
  value,
  name,
  handleChange,
  inputRef,
  patternErro,
  pattern,
  className
}) {
  const [keys] = useState(Object.keys(value.elements))
  const input = useRef(inputRef ?? null)
  const handleChangeInput = (e) => {
    handleChange(e)
  }

  return (
    <div className="flex w-full max-w-[395px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800">
      <label htmlFor={name} className="text-base font-medium leading-7 text-gray-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        ref={input}
        onChange={handleChangeInput}
        pattern={pattern}
        title={pattern ? patternErro : ''}
        className={
          className ||
          'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500'
        }
      >
        {keys.map((el) => (
          <option key={el} value={el}>
            {value.elements[el][0].toUpperCase() + value.elements[el].substring(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
