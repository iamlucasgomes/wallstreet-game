import { GameStatus } from '@/core/providers/enums/game-status'
import { IGameMessage } from '@/core/providers/interfaces/game-message.interface'
import { IWallStreetTransaction } from '@/core/providers/interfaces/transaction'
import { ISession } from '@/core/providers/session.provider'

declare namespace IWallStreetGameContext {
  type WallStreetGameContextProps = {
    gameStatus: GameStatus
    startTimeout: number
    result: number | undefined
    balance: string
    results: any[]
    roundInfo: any
    getRoundInfo: (roundId: string) => void
    session: ISession
    getRegisteredBets: () => void
    getResults: () => void
    messages: IGameMessage[]
    setMessages: React.Dispatch<React.SetStateAction<IGameMessage[]>>
    sendMessage: (message: string) => void
    registeredBets: any[]
    iframeRef: React.RefObject<HTMLIFrameElement>
    executeAction: (event: string, detail?: any) => void
    transactions: Record<string, IWallStreetTransaction>
    setTransactions: React.Dispatch<
      React.SetStateAction<Record<string, IWallStreetTransaction>>
    >
    registerTransaction: (index: string) => void
    soundEnabled: boolean
    setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>
    soundClick: () => void
    playerName: string
  }
}
