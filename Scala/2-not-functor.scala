/**
  * NOT a functor because map method returns just value, not ValueMapper
  */

case class ValueMapper[A](x: A) {
  def map[B](f: (A) => B): B =
    f(x)
}

object NotFunctorExample {

  def main(args: Array[String]): Unit = {
    val mapper = ValueMapper("Hello" -> 123)

    println(mapper.map(_._1.toUpperCase))
  }
}
