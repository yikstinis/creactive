import { View as ReactNativeView, StyleSheet } from 'react-native'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
  ViewTag,
} from './constants'
import type { ViewComponent } from './view.types'

const viewStyleSheet = StyleSheet.create({
  viewDisplayFlex: {
    display: 'flex',
    margin: 0,
    padding: 0,
    zIndex: 0,
    position: 'relative',
    listStyle: 'none',
    textDecoration: 'none',
    boxSizing: 'border-box',
  },
  viewFlexDirectionColumn: {
    flexDirection: 'column',
  },
  viewFlexDirectionRow: {
    flexDirection: 'row',
  },
  viewJustifuContentFlexStart: {
    justifyContent: 'flex-start',
  },
  viewJustifuContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  viewJustifuContentCenter: {
    justifyContent: 'center',
  },
  viewJustifuContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  viewJustifuContentSpaceAround: {
    justifyContent: 'space-around',
  },
  viewJustifuContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  viewAlignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  viewAlignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  viewAlignItemsCenter: {
    alignItems: 'center',
  },
  viewAlignItemsStretch: {
    alignItems: 'stretch',
  },
  viewAlignItemsBaseline: {
    alignItems: 'baseline',
  },
  viewAlignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  viewAlignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  viewAlignSelfCenter: {
    alignSelf: 'center',
  },
  viewAlignSelfStretch: {
    alignSelf: 'stretch',
  },
  viewAlignSelfBaseline: {
    alignSelf: 'baseline',
  },
  viewAlignContentFlexStart: {
    alignContent: 'flex-start',
  },
  viewAlignContentFlexEnd: {
    alignContent: 'flex-end',
  },
  viewAlignContentCenter: {
    alignContent: 'center',
  },
  viewAlignContentStretch: {
    alignContent: 'stretch',
  },
  viewAlignContentSpaceBetween: {
    alignContent: 'space-between',
  },
  viewAlignContentSpaceAround: {
    alignContent: 'space-around',
  },
  viewAlignContentSpaceEvenly: {
    alignContent: 'space-evenly',
  },
})
const View: ViewComponent = ({
  flexDirection = ViewFlexDirection.COLUMN,
  justifyContent = ViewJustifyContent.FLEX_START,
  alignItems = ViewAlignItems.STRETCH,
  alignSelf,
  alignContent = ViewAlignContent.FLEX_START,
  children,
}) => {
  const getFlexDirectionStyle = () => {
    switch (flexDirection) {
      case ViewFlexDirection.COLUMN:
        return viewStyleSheet.viewFlexDirectionColumn
      case ViewFlexDirection.ROW:
        return viewStyleSheet.viewFlexDirectionRow
    }
  }
  const getJustifyContentStyle = () => {
    switch (justifyContent) {
      case ViewJustifyContent.FLEX_START:
        return viewStyleSheet.viewAlignItemsFlexStart
      case ViewJustifyContent.FLEX_END:
        return viewStyleSheet.viewAlignItemsFlexEnd
      case ViewJustifyContent.CENTER:
        return viewStyleSheet.viewAlignItemsCenter
      case ViewJustifyContent.SPACE_BETWEEN:
        return viewStyleSheet.viewAlignItemsStretch
      case ViewJustifyContent.SPACE_AROUND:
        return viewStyleSheet.viewAlignItemsBaseline
      case ViewJustifyContent.SPACE_EVENLY:
        return viewStyleSheet.viewAlignItemsFlexStart
    }
  }
  const getAlignItemsStyle = () => {
    switch (alignItems) {
      case ViewAlignItems.FLEX_START:
        return viewStyleSheet.viewAlignItemsFlexStart
      case ViewAlignItems.FLEX_END:
        return viewStyleSheet.viewAlignItemsFlexEnd
      case ViewAlignItems.CENTER:
        return viewStyleSheet.viewAlignItemsCenter
      case ViewAlignItems.STRETCH:
        return viewStyleSheet.viewAlignItemsStretch
      case ViewAlignItems.BASELINE:
        return viewStyleSheet.viewAlignItemsBaseline
    }
  }
  const getAlignSelfStyle = () => {
    switch (alignSelf) {
      case ViewAlignSelf.FLEX_START:
        return viewStyleSheet.viewAlignSelfFlexStart
      case ViewAlignSelf.FLEX_END:
        return viewStyleSheet.viewAlignSelfFlexEnd
      case ViewAlignSelf.CENTER:
        return viewStyleSheet.viewAlignSelfCenter
      case ViewAlignSelf.STRETCH:
        return viewStyleSheet.viewAlignSelfStretch
      case ViewAlignSelf.BASELINE:
        return viewStyleSheet.viewAlignSelfBaseline
    }
  }
  const getAlignContentStyle = () => {
    switch (alignContent) {
      case ViewAlignContent.FLEX_START:
        return viewStyleSheet.viewAlignContentFlexStart
      case ViewAlignContent.FLEX_END:
        return viewStyleSheet.viewAlignContentFlexEnd
      case ViewAlignContent.CENTER:
        return viewStyleSheet.viewAlignContentCenter
      case ViewAlignContent.STRETCH:
        return viewStyleSheet.viewAlignContentStretch
      case ViewAlignContent.SPACE_BETWEEN:
        return viewStyleSheet.viewAlignContentSpaceBetween
      case ViewAlignContent.SPACE_AROUND:
        return viewStyleSheet.viewAlignContentSpaceAround
    }
  }
  return (
    <ReactNativeView
      style={[
        viewStyleSheet.viewDisplayFlex,
        getJustifyContentStyle(),
        getFlexDirectionStyle(),
        getAlignItemsStyle(),
        getAlignSelfStyle(),
        getAlignContentStyle(),
      ]}
    >
      {children}
    </ReactNativeView>
  )
}
View.Tag = ViewTag
View.FlexDirection = ViewFlexDirection
View.JustifyContent = ViewJustifyContent
View.AlignItems = ViewAlignItems
View.AlignSelf = ViewAlignSelf
View.AlignContent = ViewAlignContent
export default View
