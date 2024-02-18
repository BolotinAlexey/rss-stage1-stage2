## Reflections

> **1. That TS is a strictly typed language, I knew and I'm sure that for large projects it's a necessary preset to JS to avoid errors and self-documentation.**
>
> **2. I got acquainted with the ==Enum== type:**
>
> - _Helps reduce errors caused by transposing or mistyping numbers._
> - _Makes it easy to change values in the future._
>
> * _Makes code easier to read, which means it's less likely that errors will creep into it._
> * _Ensures forward compatibility. With enumerations, your code is less likely to fail if someone changes the values corresponding to the member names in the future._
>
> **I learned that the type `any` nullifies the advantage of TS typification, and the type `unknown` protects against error when determining the properties of the primitive.**
>
> **Found out about type assertion (type cast in other languages) `as` or `<type>` syntax and about type guards.**
>
> **Found out about union types `|` syntax and intersection types `&` syntax, which expands the choice of types based on existing ones:
> `let multiType: number | boolean;`
> and about literal types, which actually create new types based on existing literals:
> `type result = "pass" | "fail" | "incomplete";`**
>
> **Found out about Array typing:
> `let list: number[] = [1, 2, 3];` or
> `let list: Array<number> = [1, 2, 3];` syntax
> and about `typles`: `let person: [string, number]` syntax**
>
> **3. I learned about the ==interface==, there is similar to Java. This is some code contract which describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.**
>
> **4. I learned about the typification of the parameters of the function, as well as the typification of the returned function of the function,required and optional parameters, default and rest parameters, which also facilitates the stability of the code and its documentation.**
>
> **5. JS also uses ==classes==, but the use of classes in TS is close to the OOP and gives the following advantages:**
>
> - Expanded set access modifiers: `public, private, protected` and `readonly`.
> - Implementation of interfaces when creating classes, using interfaces instead of classes.
>
> **6. I learned ==generics==,which can:**
>
> - Provide more flexibility when working with types.
> - Enable code reuse.
> - Reduce the need to use the any type.
>
> **7. ==Modules== have been a feature of JavaScript since ES6. I use it to improve the structurality of code, decomposition and encapsulation of one.**
>
> **8. I found out about organize code using TS ==namespaces== and differences with** **_modules._** **I found modules offer some additional benefits that namespaces do not:**
>
> - Declare their dependencies.
> - Provide better code reuse.
> - Offer strong isolation.
> - Hide the internal statements of the module definitions and show only the methods and parameters associated to the declared component.
> - Provide better tooling support for bundling.
> - Are recommended over namespaces for Node.js applications because modules are the default.
> - Can resolve top-down JavaScript flow issues because a reference to an external method or class is instantiated only on method invocation.
