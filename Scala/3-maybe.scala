case class Maybe[A](x: Option[A]) {
  def map[B](f: (A) => B): Maybe[B] =
    Maybe(x.map(f))

  def isNothing = x.isEmpty

  override def toString: String =
    if (isNothing) "Maybe(Nothing)"
    else s"Maybe(${x.get})"
}

object Maybe {
  def apply[A](x: A): Maybe[A] = Maybe(Some(x))

  def empty[A]: Maybe[A] = Maybe[A](None)
}

object ExampleMaybe {

  def main(args: Array[String]): Unit = {
    val empty = Maybe.empty[Int]
    val notEmpty = Maybe(2)

    println(s"Expect Nothing, actual = ${empty.map(_ => 3)}")
    println(s"Expect Maybe(3), actual = ${notEmpty.map(_ => 3)}")
  }
}
