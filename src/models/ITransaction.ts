export interface IMsg {
  delegatorAddress: string
  validatorAddress: string
  amount: {
    denom: string
    amount: string
  }
  "@type": string
}

export interface IMessage {
  grantee: string
  msgs: IMsg[]
  "@type": string
}

export interface ITransaction {
  hash: string
  height: number
  time: string
  code: number
  gas: {
    used: string
    wanted: string
  }
  memo: string
  timeoutHeight: number
  fee: string
  messages: IMessage[]
  sender: string
  rawLog: string
}