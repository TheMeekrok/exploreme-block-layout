import { IBlock } from "../../models/IBlock"
import { FormattedBlockInfo } from "../formatted-block-info/FormattedBlockInfo"
import { RawBlockInfo } from "../raw-block-info/RawBlockInfo"

interface BlockInfoProps {
  block: IBlock
}

enum BlockState {
  FORMATTED = 1,
  RAW
}

export function BlockInfo({ block }: BlockInfoProps) {
  let state = BlockState.FORMATTED

  function setState(newState: BlockState) {
    state = newState
  }

  return (
    <div className="mt-11 ml-1.5 flex flex-col">
      <div className="text-2xl font-medium">
        <span className="opacity-60">DETAILS FOR BLOCK&nbsp;</span>
        <span className="text-custom-blue">#{ block.height }</span>
      </div>

      <div className="bg-custom-grey mt-4 rounded-xl w-64 flex relative">
        <div className="w-1/2 absolute bg-white h-full rounded-xl"></div>
        <div 
          className="w-1/2 text-center z-10 py-2"
          style={ state === BlockState.FORMATTED ? { cursor: "default" } : { cursor: "pointer" }}
          >
            Formatted
        </div>
        <div 
          className="text-custom-white w-1/2 text-center z-10 py-2"
          style={ state !== BlockState.FORMATTED ? { cursor: "default" } : { cursor: "pointer" }}
          >
            Raw
          </div>
      </div>

      <FormattedBlockInfo block={ block } />
      {/* <RawBlockInfo /> */}
    </div>
  )
}