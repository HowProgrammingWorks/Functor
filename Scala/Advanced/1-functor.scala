package functor

import scala.language.higherKinds

//Functor typeclass with existential F type
trait Functor[F[_]] {
  def fmap[A, B](fa: F[A])(f: A => B): F[B]
}

object Functor {
  //Summons functor instance if it is in scope
  def apply[F[_]](implicit f: Functor[F]): Functor[F] = f
}

//Option typeclass that represents optional value. Value type is covariant
sealed trait Option[+A]
//Option child that holds value. Value type is covariant
case class Some[+A](get: A) extends Option[A]
//Option child that represents nothing
case object None extends Option[Nothing]

object Option {
  //Some factory method
  def some[T](value: T): Option[T] = Some(value)

  //None factory method
  def none[T]: Option[T] = None

  /*
   * Remember this factory methods and that 
   * their return type is Option and not Some or None, 
   * they will come in handy in second example ;)
   */

  //Functor implementation for Option
  implicit val optionFunctor: Functor[Option] = new Functor[Option] {
    override def fmap[A, B](fa: Option[A])(f: A => B): Option[B] = fa match {
      case Some(v) => Some(f(v))
      case None    => None
    }
  }
}

object Main1 extends App {
  println(Functor[Option].fmap(None)((a: Int) => a + 2))
  //prints None
  println(Functor[Option].fmap(Some("2"))(_.toInt))
  //prints Some(2)
}
