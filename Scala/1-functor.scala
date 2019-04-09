/**
  * Simple functor example
  */

case class Functor[A](x: A) {
  def map[B](f: (A) => B): Functor[B] = Functor(f(x))
}

object Example {

  def main(args: Array[String]): Unit = {
    val functor = Functor(2)

    println("Functor rules")

    println("1. functor.map(x => x) = functor")
    println(s"functor.map(x => x) = ${functor.map(x => x)}")
    println(s"functor = $functor")

    println("2. functor.map(x => f(g(x))) = functor.map(g).map(f)")
    println(s"functor.map(x => f(g(x))) = ${functor.map(x => (x * 2) * 3)}")
    println(s"functor.map(g).map(f) = ${functor.map(_ * 2).map(_ * 3)}")

  }
}
