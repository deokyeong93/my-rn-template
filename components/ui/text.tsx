import * as Slot from '@rn-primitives/slot'
import type { SlottableTextProps, TextRef } from '@rn-primitives/types'
import { createContext, forwardRef, useContext } from 'react'

import { Text as RNText } from 'react-native'
import { cn } from '~/lib/utils'

const TextClassContext = createContext<string | undefined>(undefined)

const Text = forwardRef<
  TextRef,
  SlottableTextProps & { font?: string; pretendardWeight?: 'bold' | 'medium' }
>(({ className, asChild = false, font, pretendardWeight = '', ...props }, ref) => {
  const textClass = useContext(TextClassContext)
  const Component = asChild ? Slot.Text : RNText

  const textStyle = {
    fontFamily: font || `pretendard${pretendardWeight ? `-${pretendardWeight}` : ''}`,
  }

  return (
    <Component
      className={cn('text-base text-foreground web:select-text', textClass, className)}
      ref={ref}
      style={textStyle}
      {...props}
    />
  )
})
Text.displayName = 'Text'

export { Text, TextClassContext }
