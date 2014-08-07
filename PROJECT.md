## Setting type vs composing the page

TypeCabinet splits it's tools into two groups - SASS mixins and extentions for composing type, and CSS helper classes for composing layouts. Defining size, tracking, and line height are all decisions that happen at the type setting stage - and should be accomplished in the stylesheets. More basic transformations, like defining alignment, can happen at the strucural level of shaping the page - in the HTML. The exception to this is in defining the typeface, which happens in both places. Assigning faces to html is setting the type, and should primarly be done in sass. However, there are times when quickly changing the face in the compositional phase is ideal, and should be accomodated.


## Units

**The Rem** is the standard unit of measurement in TypeCabinet. All units that relate to absolute sizes or relationships between elements use the Rem. The Rem is defined once, and is tied to your body font size. The Rem is used for defining sizes, margins, indentation, padding, widths, and any other measurements that need to be equal across all html elements.

**The Em** is similar to the Rem, in that it is a reflection of type size. Where the Rem only has a single value - which is the size of the body - the value of the Em changes to match whatever the current font size is. An Em on an `<h1>` is going to significantly larger than an Em in a `<p>` tag. The Em is used for measurements that need to remain proportional to the size of the surrounding type, and is primarily used for tracking, word spacing, and other horizontal adjustments.

**The Pixel** is mostly ignored in TypeCabinet. It is used once to define the base body size against which all other mesaurements are derived.

## Measurements

### X-Height and Font-Size
X-height is the height of a lowercase letter measured from the baseline, or the height of the lowercase x. Font size is the overall body size of the characters, including the descenders, ascenders, and uppercase characters.

We can control the font size of our type, but the x-height is a largely independent factor, determined by the design of the typeface. Typefaces with generouse x-heights will appear to be larger than typefaces with smaller x-heights at the same font size, and this should be accounted for when laying out the page or deciding on a set of families to use in a project.

### Leading, Line Height, and the Baseline Grid
Leading is the extra amount of space between lines of type. The line height is the total amount of height in the line - the font size plus the leading. The baseline grid is a standard vertical grid that is defined by the leading and line height of the primary body type.

In TypeCabinet, these three ideas tend to blend together. All typographic elements are set to a line height defined by the baseline variable. This tends to be an amount of leading that lends itself to the body size and face to provide comfortable reading. All other vertical measurements are then created in reference to the baseline grid. Leading, than, becomes an adjustment to the line height in reference to it's proportion to the baseline grid.

### Tracking and Word Spacing
Tracking the amount of space between each letter in a word. Word spacing is the amount of space between each word. TypeCabinet allows for tracking to be set be default across type families, as well as adjusted per element with the tracking() mixin.

# Do wafting zephyrs quickly vex Jumbo?
## Go, lazy fat vixen; be shrewd, jump quick.
### Fickle jinx bog dwarves spy math quiz.
#### Big dwarves heckle my top quiz of jinx.
##### Fickle bog dwarves jinx empathy quiz.
###### Public junk dwarves hug my quartz fox.

**Lorem ipsum dolor sit amet**, consectetur<sup>1</sup> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<sup>2</sup>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._

<blockquote class="leader-2 trailer-2">
	<h2 class="secondary-bold-italic blue center">
		Everything is designed.<br>
		Few things are designed well.
	</h2>
</blockquote>

<p class="secondary-face">
**Lorem ipsum dolor sit amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._
</p>

<p><small>**Lorem ipsum dolor sit amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui _officia deserunt mollit anim id est laborum._</small></p>


## Harmony & Scale
TypeCabinet uses [Modular Scale 1.0](https://github.com/Team-Sass/modular-scale/blob/1.x/readme.md) to define a double-stranded composition scale. The scale is calculated from the `$ratio` variable, and the two base type size variables, `$body-size` and `$small-size`. The primary use for this scale is in defining font sizes, stepping up and down the scale to create a page that reflects principles of [meaningful typography](http://alistapart.com/article/more-meaningful-typography). The `modular-scale()` function is also exposed, and returns rem values from the scale, and can be used to construct layouts and larger page structures.

## Type Families
There are four type families exposed for use in TypeCabinet, though many projects may use less. Header, Body, Secondary, and Code families are ready to use in a variety of weights. Variables in the `_config.scss` file define the stacks for the given families, and helper classes can either be extended from within sass stylesheets, or applied directly to html elements.

## Tracking, Leading, and Word Spacing
Default tracking options are available for each type family indendently within `_condfig.scss`. For example, if your body face consistently needs to be tracked out to maintain readabillity, you can

## Vertical Rhythym

## Composing the Page
