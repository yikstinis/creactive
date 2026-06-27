/**
 * Font weight enum mapping named weights to numeric values.
 * Use with {@link Font.Weight} to specify the weight when constructing a {@link Font}.
 */
export enum FontWeight {
  /**
   * Thin weight, equivalent to CSS font-weight 100.
   * Use for very fine, delicate text appearances.
   */
  THIN = 100,
  /**
   * Extra-light weight, equivalent to CSS font-weight 200.
   * Use for lightweight, low-emphasis text.
   */
  EXTRALIGHT = 200,
  /**
   * Light weight, equivalent to CSS font-weight 300.
   * Use for secondary or supporting text.
   */
  LIGHT = 300,
  /**
   * Regular weight, equivalent to CSS font-weight 400.
   * Use as the default body text weight.
   */
  REGULAR = 400,
  /**
   * Medium weight, equivalent to CSS font-weight 500.
   * Use for slightly emphasized text without full bold.
   */
  MEDIUM = 500,
  /**
   * Semibold weight, equivalent to CSS font-weight 600.
   * Use for headings or moderately emphasized text.
   */
  SEMIBOLD = 600,
  /**
   * Bold weight, equivalent to CSS font-weight 700.
   * Use for strong emphasis, such as headings and CTAs.
   */
  BOLD = 700,
  /**
   * Extra-bold weight, equivalent to CSS font-weight 800.
   * Use for very strong emphasis or decorative headings.
   */
  EXTRABOLD = 800,
  /**
   * Black weight, equivalent to CSS font-weight 900.
   * Use for maximum weight, such as display or hero text.
   */
  BLACK = 900,
}
