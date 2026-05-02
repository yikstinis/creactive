import { faker } from '@faker-js/faker'
import { StyleSheet, Text, View } from 'react-native'

// For random background color generation.
const generateBackgroundStyle = () => ({
  backgroundColor: faker.color.rgb(),
})
// For some styling children layout items.
// Supposed to help us with stoybook demonstration.
const childrenStyleSheet = StyleSheet.create({
  viewContainer: {
    margin: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  textContent: {
    fontSize: 32,
    color: 'rgba(255, 255, 255, 0.75)',
  },
})
// Renders styled and numerated layout children.
export const renderLayout = (amount: number) => {
  return [...new Array(amount)].map((_, index) => (
    <View
      key={index}
      style={generateBackgroundStyle()}
    >
      <View style={childrenStyleSheet.viewContainer}>
        <Text style={childrenStyleSheet.textContent}>{index + 1}</Text>
      </View>
    </View>
  ))
}
