export default function MostrarMensaje({ score, number, secretNumber }) {
  if (secretNumber === number) {
    return <p className="message">¡Has ganado!</p>;
  } else if (secretNumber > number) {
    return <p className="message">El número es más alto</p>;
  } else if (secretNumber < number) {
    return <p className="message">El número es más bajo</p>;
  } else return <p className="message">Start guessing...</p>;
}
