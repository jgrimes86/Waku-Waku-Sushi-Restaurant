function MenuItem({ name, image, description }) {
    return (
        <div className="menu-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>

        </div>
    )
}

export default MenuItem;