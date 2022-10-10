import { useRef } from 'react'

export default function FormInput({
  label,
  type,
  value,
  name,
  placeholder,
  handleChange,
  inputRef,
  patternErro,
  pattern,
  id
}) {
  const input = useRef(inputRef ?? null)

  const handleChangeInput = (e) => {
    handleChange(e)
  }

  return (
    <div className="flex w-full max-w-[395px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800">
      <label htmlFor={name} className="text-base font-medium leading-7 text-gray-800">
        {label}
      </label>
      <input
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
        ref={input}
        onChange={handleChangeInput}
        pattern={pattern}
        title={pattern ? patternErro : ''}
        className="placeholder-gray-400::placeholder w-full rounded-lg border border-gray-400 px-4 py-3 text-left text-base font-normal
          leading-6 text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
    </div>
  )
}
