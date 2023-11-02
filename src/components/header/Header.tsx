export function Header() {
  return (
    <div className="flex justify-between">
      <span className="flex items-center">
        <img className="w-16 h-auto" src="./icons/logo.svg" alt="EXPLOREME beta" />
        <span className="font-medium text-lg opacity-60">EXPLOREME</span>
        <span className="font-light text-base opacity-60 ml-2">beta</span>
      </span>
      <span className="flex items-center">
        <span className="flex bg-custom-white rounded-lg px-5 py-3">
          <img className="w-5 h-auto" src="./icons/Arhway.svg" alt="Arhway" />
          <span className="text-lg ml-1">Arhway</span>
          <img className="ml-16 w-6 h-auto" src="/icons/arrows.svg" alt="arrows" />
        </span>

        <span className="ml-10 py-3 pr-5 pl-12 border-2 border-custom-white rounded-lg flex">
          <input
            className="w-72 border-0 text-xs font-normal"
            type="text"
            placeholder="valoper / tx hash / block height / address"
          />
          <img className="ml-11" src="./icons/search.svg" alt="search" />
        </span>
      </span>
    </div>
  )
}