export default function Input({
  label,
  type,
  value,
  name,
  placeholder,
  handleChange,
  inputRef,
  required
}) {
  const handleChangeInput = (e) => {
    handleChange(e)
  }

  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800"
    >
      {label}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChangeInput}
        ref={inputRef}
        required={required}
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800 valid:border-gray-400 invalid:border-red-500 invalid:text-red-600  focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600 focus:valid:border-gray-400  focus:valid:ring-gray-400  focus:invalid:border-red-500 focus:invalid:ring-red-500"
      />
    </label>
  )
}
