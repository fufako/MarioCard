const Card = (props) => {
  const { src, name, handleGame } = props
  return (
    <div className="card" onClick={handleGame.bind(this, name)}>
      <img src={src} alt={name} />
      <p className="title">{name}</p>
    </div>
  )
}

export default Card
