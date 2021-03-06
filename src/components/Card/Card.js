import "./Card.scss"

const Card = ({ children, ...props }) => {
  return (
    <div {...props} className={`card ${props.className}`}>
      {children}
    </div>
  )
}

export default Card
