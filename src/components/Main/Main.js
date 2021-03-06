import "./Main.scss"

const items = [
  ["", "", "", "", "", 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
]

const Row = ({ rowItems }) => {
  return (
    <div className="row">
      {rowItems.map((item, i) => (
        <div key={i} className="item">
          {item}
        </div>
      ))}
    </div>
  )
}

const Main = () => {
  return (
    <section className="main">
      {items.map((item, i) => (
        <Row key={i} rowItems={item} />
      ))}
    </section>
  )
}

export default Main
