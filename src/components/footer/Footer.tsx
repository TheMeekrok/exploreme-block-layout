export function Footer() {
  return (
    <div className="bg-white py-10 rounded-t-xl mt-20 flex justify-around">
      <div className="">
        <span className="flex items-center">
          <img src="icons/logo.svg" alt="STAKEME" />
          <span className="font-medium text-xl tracking-wider">STAKEME</span>
        </span>
        <span className="font-menu text-sm text-custom-grey">
          © 2017 - 2023 STAKEME Developments - All Rights Reserved.
        </span>
      </div>

      <div className="grid grid-cols-3 font-menu items-end">
        <span className="text-center">Brand assets</span>
        <span className="text-center">Twitter</span>
        <span className="text-center">Contribute</span>
        <span className="text-center">Community</span>
        <span className="text-center">Discord</span>
      </div>
    </div>
  )
}