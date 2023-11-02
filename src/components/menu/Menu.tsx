export function Menu() {
  return (
    <menu className="mt-10 font-menu text-xl flex justify-between">
      <span className="menu-button">
        <img className="w-6 h-6" src="./icons/dashboard.svg" alt="Dashboard" />
        <span className="ml-1.5">Dashboard</span>
      </span>

      <span className="menu-button">
        <img className="w-5 h-5" src="./icons/validators.svg" alt="Validators" />
        <span className="ml-1.5">Validators</span>
      </span>

      <span className="menu-button">
        <img className="w-6 h-6" src="./icons/blocks.svg" alt="Blocks" />
        <span className="ml-1.5">Blocks</span>
      </span>

      <span className="menu-button">
        <img className="w-6 h-6" src="./icons/proposals.svg" alt="Proposals" />
        <span className="ml-1.5">Proposals</span>
      </span>

      <span className="menu-button">
        <img className="w-5 h-5" src="./icons/utilities.svg" alt="Utilities" />
        <span className="ml-1.5">Utilities</span>
      </span>
    </menu>
  )
}