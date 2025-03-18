import type { StoryContext } from '@storybook/react'
import { StorybookControl, modifyContextNumericEnumControls } from './control'

describe('@/helpers/storybook/control', () => {
  describe('from numeric enum con', () => {
    it('creates control from numeric method', () => {
      enum TestEnum {
        A,
        B,
        C,
      }
      const testControl = StorybookControl.fromNumericEnum(
        TestEnum as Record<keyof typeof TestEnum, TestEnum>
      )
      expect(testControl.control.isCreactiveStorybookNumericEnum).toEqual(true)
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
      expect(testControl.control.isCreactiveStorybookNumericEnum).toEqual(true)
      expect(testControl.control.type).toEqual('select')
      expect(testControl.options).toEqual([TestEnum.A, TestEnum.B, TestEnum.C])
      expect(testControl.defaultValue).toEqual(TestEnum.A)
      expect(testControl.control.labels[TestEnum.A]).toEqual('A')
      expect(testControl.control.labels[TestEnum.B]).toEqual('B')
      expect(testControl.control.labels[TestEnum.C]).toEqual('C')
      expect(testControl.control.labels[undefined as number]).toEqual('-')
    })
  })

  describe('for children control method', () => {
    it('creates children control', () => {
      const testControl = StorybookControl.forChildren()
      expect(testControl.control.type).toEqual('text')
      expect(testControl.defaultValue).toEqual(expect.any(String))
    })
  })

  describe('modifying context numeric controls helper', () => {
    it('modifies context with numeric enum controls', () => {
      const testContext: Pick<StoryContext, 'argTypes' | 'args'> = {
        argTypes: {
          testField: {
            control: {
              isCreactiveStorybookNumericEnum: true,
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

    it('handles undefined control label when provided as value', () => {
      // Storybook passes this label as a value for some reason when select it.
      // This only happens, when some value was selected before.
      // Our helper also handles this case inside (modifies value to undefined).
      const testContext: Pick<StoryContext, 'argTypes' | 'args'> = {
        argTypes: {
          testField: {
            control: {
              isCreactiveStorybookNumericEnum: true,
              type: 'select',
              labels: {
                undefined: '-',
                0: 'A',
                1: 'B',
                2: 'C',
              },
            },
            defaultValue: undefined,
            options: [undefined, 0, 1, 2],
            name: 'testField',
          },
        },
        args: {
          testField: '-',
        },
      }
      const modifiedContext = modifyContextNumericEnumControls(
        testContext as StoryContext
      )
      expect(modifiedContext.args.testField).toEqual(undefined)
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
})
