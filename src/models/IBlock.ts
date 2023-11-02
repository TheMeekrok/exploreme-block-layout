interface IProposer {
  operatorAddress: string
  moniker: string
  avatar: string | null
}

export interface IBlock {
  height: number
  time: string
  hash: string
  txsCount: number
  proposer: IProposer
  signatures: IProposer[]
  canonical: boolean
}