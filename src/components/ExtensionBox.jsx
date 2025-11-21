export default function ExtensionBox({
  extension,
  handleRemoveExt,
  handleToggleExt,
}) {
  const { name, description, logo, isActive } = extension;

  return (
    <main className="bg-primary-light-100 dark:bg-primary-dark-800 dark:ring-primary-dark-600 flex h-[200px] flex-col justify-between rounded-2xl p-4 shadow-[1px_1px_3px_rgba(0,0,0,.25)] dark:ring-[1px]">
      {/* Upper */}
      <header className="flex items-start gap-4">
        <img src={logo} alt="extensions logo" />
        <div className="space-y-2">
          <h3 className="text-primary-dark-700 dark:text-primary-light-100 text-2xl font-bold">
            {name}
          </h3>
          <p className="text-primary-dark-600 dark:text-primary-light-400/75 leading-6 font-medium">
            {description}
          </p>
        </div>
      </header>

      {/* Buttons */}
      <footer className="flex items-center justify-between">
        {/* Remove button */}
        <button
          onClick={() => handleRemoveExt(name)}
          className="text-primary-dark-900 border-primary-light-400 dark:border-primary-dark-600 dark:text-primary-light-200 text-md hover:text-primary-light-200 dark:hover:text-primary-dark-900 cursor-pointer rounded-full border px-5 py-2 font-medium transition-all duration-200 hover:bg-red-700 focus:outline-1 focus:outline-red-700 active:scale-85 dark:hover:bg-red-500 dark:focus:bg-red-500"
        >
          Remove
        </button>
        {/* Toggle button */}
        <label
          className="inline-flex cursor-pointer items-center"
          htmlFor={name}
        >
          <input
            type="checkbox"
            id={name}
            className="peer sr-only"
            checked={isActive}
            onChange={() => handleToggleExt(name)}
          />
          <div className="peer bg-primary-light-400 dark:bg-primary-dark-600 relative h-5 w-9 rounded-full peer-checked:bg-red-700 after:absolute after:start-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full dark:peer-checked:bg-red-500"></div>
        </label>
      </footer>
    </main>
  );
}
