import * as React from 'react'
import { View } from 'react-native'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function Screen() {
  return (
    <View className="items-center justify-center flex-1 gap-5 p-6 bg-secondary/30">
      <Text>Index Screen</Text>
      <Button>
        <Text>클릭</Text>
      </Button>
    </View>
  )
}
