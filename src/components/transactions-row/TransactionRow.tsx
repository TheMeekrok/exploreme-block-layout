import moment from "moment"
import { ITransaction } from "../../models/ITransaction"

const successMessage = '✅ Success'

interface TransactionRowProps {
  transaction: ITransaction
  index: number
}

export function TransactionRow({ transaction, index }: TransactionRowProps) {
  let hash = transaction.hash
  if (hash.length > 20) {
    hash = hash.substring(0, 8) + '...' + hash.substring(hash.length - 8, hash.length)
  }

  const color = index % 2 === 0 ? 'bg-light-grey' : 'bg-white'
  const rowStyle = color + ' h-14';

  const timestamp = moment(transaction.time)

  return (
    <tr className={ rowStyle }>
      <td className="text-custom-blue text-sm text-center">{ hash }</td>
      <td className="text-sm text-center">{ transaction.memo }</td>
      <td className="text-sm text-center">{ !transaction.code && successMessage }</td>
      <td className="text-sm text-center">{ transaction.fee }</td>
      <td className="text-sm text-center">{ timestamp.format('DD.MM.YYYY') }</td>
      <td className="text-sm text-center">{ timestamp.format('hh:mm:ss') }</td>
    </tr>    
  )
}