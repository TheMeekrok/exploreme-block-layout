import { ITransaction } from "../../models/ITransaction"
import { TransactionRow } from "../transactions-row/TransactionRow"

interface BlockTransactionsProps {
  transactions: ITransaction[]
}

export function BlockTransactions({ transactions }: BlockTransactionsProps) {
  return (
    <table className="align-middle">
      <th className="text-base font-medium h-14">Transaction Hash</th>
      <th className="text-base font-medium h-14">Type</th>
      <th className="text-base font-medium h-14">Result</th>
      <th className="text-base font-medium h-14">Free</th>
      <th className="text-base font-medium h-14">Date</th>
      <th className="text-base font-medium h-14">Time</th>

      { transactions.map( (t, index) => <TransactionRow transaction={ t } index={ index } /> ) }
    </table>
  )
}