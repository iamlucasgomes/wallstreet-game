import React from 'react'

const ChatMaintenanceNotice: React.FC = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <p className="font-bold">O chat está em manutenção.</p>
      <p className="text-sm">Pedimos desculpas pelo inconveniente.</p>
    </div>
  )
}

export default ChatMaintenanceNotice
