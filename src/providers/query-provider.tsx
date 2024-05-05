'use client'

import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from '@/service/client'

const QueryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider