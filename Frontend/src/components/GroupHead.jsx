const GroupHead = ({ title, description, imgSrc }) => {
    return <div className="card bg-dark text-white" style={{borderRadius: 0 }}>
        <img src={imgSrc} className="w-100 custom-img-height" style={{ objectFit: "cover", width: "100%" }} />
        
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
            <h4 className="card-title">{title}</h4>
            <p className="card-text m-0">{description}</p>
        </div>
    </div>
}

export default GroupHead