export default function Dropdown({ label, name, value, handleChange, list, id }) {
  return (
    <div className="flex w-full max-w-[395px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800">
      <label htmlFor={name} className="text-base font-medium leading-7 text-gray-800">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="placeholder-gray-400::placeholder w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-base font-normal leading-6
          text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}
