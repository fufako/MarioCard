const Card = (props) => {
  const { src, name, key, handleGame } = props
  return (
    <div className="card">
      <img src={src} alt={name} />
      <p className="title">{name}</p>
    </div>
  )
}

export default Card
