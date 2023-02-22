# itemGen Read Me
This project will develop a method for specifying, autogeneration, automation, and interoperability of **adaptive OER assessment items**. It will also develop sample code demostrating the portability of these items across delivery platforms and contexts.

Definitions:
* **method for specifying** -- The project will develop an item profile specification format--a means of specifying the (a) type of stimulus and (b) possible learner responses during interaction with an assessment item and (c) metadata parameters and (d) logic or guidelines for scoring, evaluating, or determining adaptive feedback to learners. Each item profile specification using this format will serve as a template for autogeneration of any number of psycometrically comparable items.
* **autogeneration** -- The project aims to demonsrate (with working code) a method for autogenteratiin of OER assessment items. The base design pattern is presentation of any assessment item or performance task stimulus in a web browswer using HTML5 that conforms to the item profile specification and for that same HTML5 block to securely send learner response data that conforms to the item profile specification to a contextually defined API endpoint.
* **interoperability** -- The assessment items gernerated should be interoperable with (1) common end user delivery platforms including presentation of items via standard web browsers and (2) collection of data from item interactions using data instrumentation standards. A secondary goal is addressing use with and within content management and learning management platforms from which the content may be acessed or launched.
* **OER** -- The intent of this project is to support the proliferation of interoperable assessment items as widley available open education resources.


Possible approach (a logical sequence suggested, although concurrent iterative development is possible):
1. **Item Profile Specification** -- Community development initially as a web form (Google form) to specify and test an informatiin model with required and optional properties for item profiles.
2. **Metadata standards curation and development** -- Select from existing open standards (e.g. LRMI) to define properties of the item profile specification. Draft new definitions if needed and propose for adoption by relevant standards bodies.
3. **Autogeneration model using item template** -- Develop item autogeneration code that conforms to the item profile specification, i.e. using an item profile as an input and a parameterized item template, autogenerate items and then validate that thise items conform to the item profile, including that the resulting data instrumentatiin and response range conforms to the profile.
4. **Develop and host large scale single domain item bank** as proof of concept.
5. **Research use and usability of OER item banks** 
Research questions: 
* Is the approach trasferable across domains and performance task types? 
* What domain-specific adaptations are needed? 
* Will the approach translate to other delivery tech and contexts such as VR or IoT?
