export default function Button({ children, type, icon, color, loading, disabled }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      className={`${
        color === 'green' ? `bg-green-500 hover:bg-green-800` : 'bg-blue-500 hover:bg-blue-800'
      } flex h-12 w-full max-w-[395px] items-center justify-center rounded-lg text-base font-semibold leading-6 text-white transition-colors duration-300 ease-in disabled:cursor-not-allowed disabled:bg-gray-400`}
    >
      {loading ? (
        <svg
          role="status"
          fill="none"
          className="h-10 w-10 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <>
          {' '}
          {icon && <img src={`/assets/icons/${icon}.svg`} alt="Icon" className="mr-2 text-white" />}
          {children}{' '}
        </>
      )}
    </button>
  )
}
