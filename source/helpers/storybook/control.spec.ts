import type { StoryContext } from '@storybook/react'
import {
  STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG,
  STORYBOOK_CONTROL_UNDEFINED_OPTION,
} from './constants'
import { StorybookControl, modifyContextNumericEnumControls } from './control'

describe('@/helpers/storybook/control.fromNumericEnum', () => {
  it('creates control from numeric enum', () => {
    enum TestEnum {
      A,
      B,
      C,
    }
    const testControl = StorybookControl.fromNumericEnum(
      TestEnum as Record<keyof typeof TestEnum, TestEnum>
    )
    expect(testControl.control[STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]).toEqual(
      true
    )
    expect(testControl.control.type).toEqual('select')
    expect(testControl.options).toEqual([TestEnum.A, TestEnum.B, TestEnum.C])
    expect(testControl.defaultValue).toEqual(TestEnum.A)
    expect(testControl.control.labels[TestEnum.A]).toEqual('A')
    expect(testControl.control.labels[TestEnum.B]).toEqual('B')
    expect(testControl.control.labels[TestEnum.C]).toEqual('C')
  })

  it('creates optional control from numeric enum ', () => {
    enum TestEnum {
      A,
      B,
      C,
    }
    const testControl = StorybookControl.fromNumericEnum(
      TestEnum as Record<keyof typeof TestEnum, TestEnum>
    )
    expect(testControl.control[STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]).toEqual(
      true
    )
    expect(testControl.control.type).toEqual('select')
    expect(testControl.options).toEqual([TestEnum.A, TestEnum.B, TestEnum.C])
    expect(testControl.defaultValue).toEqual(TestEnum.A)
    expect(testControl.control.labels[TestEnum.A]).toEqual('A')
    expect(testControl.control.labels[TestEnum.B]).toEqual('B')
    expect(testControl.control.labels[TestEnum.C]).toEqual('C')
    expect(testControl.control.labels[undefined as number]).toEqual(
      STORYBOOK_CONTROL_UNDEFINED_OPTION
    )
  })
})

describe('@/helpers/storybook/control.forChildren', () => {
  it('creates children control', () => {
    const testControl = StorybookControl.forChildren()
    expect(testControl.control.type).toEqual('text')
    expect(testControl.defaultValue).toEqual(expect.any(String))
  })
})

describe('@/helpers/storybook/control.modifyContextNumericEnumControls', () => {
  it('modifies context with numeric enum controls', () => {
    const testContext: Pick<StoryContext, 'argTypes' | 'args'> = {
      argTypes: {
        testField: {
          control: {
            [STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]: true,
            type: 'select',
            labels: {
              0: 'A',
              1: 'B',
              2: 'C',
            },
          },
          defaultValue: 0,
          options: [0, 1, 2],
          name: 'testField',
        },
      },
      args: {
        testField: '0',
      },
    }
    const modifiedContext = modifyContextNumericEnumControls(
      testContext as StoryContext
    )
    expect(modifiedContext.args.testField).toEqual(0)
  })

  it('does nothing with controls without numeric enum flag', () => {
    const testContext: Pick<StoryContext, 'argTypes' | 'args'> = {
      argTypes: {
        testField: {
          control: {
            type: 'select',
            labels: {
              0: 'A',
              1: 'B',
              2: 'C',
            },
          },
          defaultValue: 0,
          options: [0, 1, 2],
          name: 'testField',
        },
      },
      args: {
        testField: '0',
      },
    }
    const modifiedContext = modifyContextNumericEnumControls(
      testContext as StoryContext
    )
    expect(modifiedContext.args.testField).toEqual('0')
  })
})
