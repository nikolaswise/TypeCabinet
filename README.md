TypeCabinet
Traditional Typesetting for Digital Publication

TypeCabinet is a SASS module for managing typography with web projects - or any application that uses HTML and CSS to design type. While there are a lot of fantastic tools out there right now like Typecast and TypeKit and the like, these take a perspective on typography informed by professional web designers. The approach I'm taking with TypeCabinet is informed by traditional hand-set letterpress printing, and principles of type and page layout existed far longer than the web of desktop publishing. A key theory in TypeCabinet is pixel independence. I define a baseline relative unit, and from there move into Picas and Points - combining the best functionalities of both print and web units.

TypeCabinet works by defining the three distinct elements of a font: Typeface, Weight, and Point Size separately, and using SASS mixins to combine these into cabinets and cases like those use in a letterpress shop. For example, the subtitle to this section is simply defined as DinMedium30Point, with the options to change case, tracking, and leading as needed. 

For questions and suggestions, hit me up on twitter @NikolasWise 