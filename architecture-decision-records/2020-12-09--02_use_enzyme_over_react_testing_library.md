#Why enzyme?

##Date
2020-12-09

##Context
[Enzyme](https://www.npmjs.com/package/enzyme) 
[React Testing Library](https://www.npmjs.com/package/@testing-library/react)

##Decision
Even though React Testing Library has become the state of the art in the industry, I haven't had a chance to work with it and decided to use a tool I am familiar with.

##Consequences
Enzyme doesn't support React 17 out of the box and requires (some workarounds)[https://github.com/enzymejs/enzyme/issues/2429].
Moreover, enzyme approach to testing seems a bit less meaningful. 