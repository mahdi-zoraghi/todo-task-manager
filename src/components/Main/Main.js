import "./Main.scss"

const items = [
  0,
  1,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
]

const Main = () => {
  return (
    <section className="main">
      {items.map(item => (
        <div className="item">{item}</div>
      ))}
    </section>
  )
}

export default Main
