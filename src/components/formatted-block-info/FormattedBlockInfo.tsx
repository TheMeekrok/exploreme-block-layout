import moment from "moment"
import { transactions } from "../../data/transactions"
import { IBlock } from "../../models/IBlock"
import { BlockTransactions } from "../block-transactions/BlockTransactions"
import { SignatureIcon } from "../signature-icon/SignatureIcon"

interface FormattedBlockInfoProps {
  block: IBlock
}

export function FormattedBlockInfo({ block }: FormattedBlockInfoProps) {
  const timestamp = moment(block.time)

  return (
    <div className="mt-7">
      <div className="flex flex-row">
        <div className="details-block items-center h-24">
          <span className="flex items-center">
            <img 
              src={ block.proposer.avatar || "" } 
              alt={ block.proposer.moniker }
              className="w-12 h-12"
            />

            <span className="flex flex-col ml-3.5">
              <span className="text-base opacity-30 ">Proposer</span>
              <span 
                className="text-custom-blue text-2xl font-medium"
              >
                { block.proposer.moniker }</span>
            </span>
          </span>

          <span className="px-12 py-4 rounded-full bg-salad">
            <span className="text-custom-white text-3xl">{ block.height }</span>
          </span>
        </div>

        <div className="details-block ml-4 flex-col relative">

          {/* Date */}
          <div className="details-block-label flex w-full justify-between">
            <span>Date</span>
            <span>2 min ago</span>
          </div>
          <div className="details-block-content">
            <span>{ timestamp.format('DD.MM.YYYY, hh:mm:ss') }</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-4 h-24">

        {/* Txs total fee */}
        <div className="details-block flex-col relative">
          <div className="details-block-label">
            <span>Txs total fee</span>
          </div>
          <div className="details-block-content">
            <span>–</span>
          </div>
        </div>

        {/* Num. of Txs */}
        <div className="details-block flex-col relative ml-4">
          <div className="details-block-label">
            <span>Num. of Txs</span>
          </div>
          <div className="details-block-content">
            <span>{ block.txsCount }</span>
          </div>
        </div>
      </div>

      {/* Hash */}
      <div className="details-block flex-col relative mt-4 h-24">
        <div className="details-block-label">
          <span>Hash</span>
        </div>
        <div className="details-block-content">
          <span>{ block.hash }</span>
          <img className="ml-1" src="./icons/copy.svg" alt="Copy" />
        </div>
      </div>

      {/* Signatures */}
      <div className="details-block flex-col relative mt-4">
        <div className="details-block-label">
          <span className="flex justify-between">
            <span>Signatures</span>
            <span className="flex justify-between bg-light-grey px-3 py-1 rounded-lg w-80">
              <input className="w-full text-center" type="text" placeholder="search validator"/>
              <img className="ml-1" src="./icons/search_small.svg" alt="Search" />
            </span>
          </span>
        </div>
        <div className="grid grid-cols-signatures gap-1 px-5 py-7">
          { block.signatures.map(s => <SignatureIcon avatar={ s.avatar } /> ) }
        </div>
      </div>

      {/* Transactions in block */}
      <div className="details-block flex-col relative mt-4">
        <div className="details-block-label">
          <span>Transactions in block</span>
        </div>
        <BlockTransactions transactions={ transactions }/>
      </div>

    </div>
  )
}
