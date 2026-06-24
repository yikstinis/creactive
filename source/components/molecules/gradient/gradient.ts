import { View } from '@/components/atoms/view'
import { GradientCircular, GradientLinear } from './components'
import type { GradientObject } from './gradient.types'

export const Gradient: GradientObject = {
  Linear: GradientLinear,
  Circular: GradientCircular,
  Tag: View.Tag,
  Position: View.Position,
  Overflow: View.Overflow,
  FlexWrap: View.FlexWrap,
  FlexDirection: View.FlexDirection,
  JustifyContent: View.JustifyContent,
  AlignItems: View.AlignItems,
  AlignSelf: View.AlignSelf,
  AlignContent: View.AlignContent,
  Spacing: View.Spacing,
  BoxShadow: View.BoxShadow,
  BorderColor: View.BorderColor,
  BorderWidth: View.BorderWidth,
  BorderRadius: View.BorderRadius,
  BackgroundColor: View.BackgroundColor,
  TransitionDuration: View.TransitionDuration,
}
