const Card = (props) => {
  const { src, name, handleGame } = props
  return (
    <div className="container" onClick={handleGame.bind(this, name)}>
      <div className="card">
        <img src={src} alt={name} />
        <p className="title">{name}</p>
      </div>
    </div>
  )
}

export default Card
