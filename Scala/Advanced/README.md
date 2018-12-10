## Description
The most flexible way to implement functor in Scala is to define it as typeclass.
Good example of such behaviour is Cats and Scalaz libraries that supply developer with different typeclasses. This libraries include Functor too, but in much more complicated and mature form than in this example.

## How to Run
First sources should be compiled to `.jar` file using `scalac` command:
> scalac *.scala -d Functor.jar
 
Next the examples can be executed by their fully qualified name(either `functor.Main1` or `functor.Main2`):

> scala -cp Functor.jar functor.Main1

Another way to run examples is to use build tools like: sbt, gradle or maven

## Helpful resources
* [Functor in Cats](https://typelevel.org/cats/typeclasses/functor.html)
* [Functor in Scalaz](http://eed3si9n.com/learning-scalaz/Functor.html)
* [Cats Functor exercises](https://www.scala-exercises.org/cats/functor)
* [sbt website](https://www.scala-sbt.org/)