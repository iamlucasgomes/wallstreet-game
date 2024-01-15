import React, { useContext } from 'react'
import { WallStreetResult } from './enums/wall-street-result.enum'
import { MinusIcon } from '@heroicons/react/24/outline'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import { WallStreetGameContext } from '@/core/providers/games/wall-street-game.provider'
import { GameStatus } from '@/core/providers/enums/game-status'
import { IGameMessage } from '@/core/providers/interfaces/game-message.interface'
import { IWallStreetTransaction } from '@/core/providers/interfaces/transaction'
import { ISession } from '@/core/providers/session.provider'
import { IWallStreetGameContext } from '../../@types/WallStreetGameContext'

type Props = {
  round_id: number
  trending: number
  grow: number
  showRoundInfo: Function
}

export default function MultiplierBadge({
  round_id,
  trending,
  grow,
  showRoundInfo,
}: Props) {
  const { soundClick } = useContext(
    WallStreetGameContext
  ) as IWallStreetGameContext.WallStreetGameContextProps

  const handleClick = (e) => {
    soundClick()
    showRoundInfo(e)
  }

  switch (trending) {
    case WallStreetResult.UP:
      return (
        <button
          onClick={() => handleClick(round_id)}
          className="bg-green-600 cursor-pointer text-gray-100 min-w-[32px] min-h-[32px] rounded-sm flex justify-center items-center"
        >
          <FaArrowTrendUp className="w-5 h-5" />
        </button>
      )

    case WallStreetResult.DOWN:
      return (
        <button
          onClick={() => handleClick(round_id)}
          className="bg-red-600 cursor-pointer text-gray-100 min-w-[32px] min-h-[32px] rounded-sm flex justify-center items-center"
        >
          <FaArrowTrendDown className="w-5 h-5" />
        </button>
      )

    case WallStreetResult.IDLE:
      return (
        <button
          onClick={() => handleClick(round_id)}
          className="bg-yellow-400 cursor-pointer min-w-[32px] min-h-[32px] rounded-sm flex justify-center items-center"
        >
          <MinusIcon className="w-5 h-5" />
        </button>
      )
  }
}
