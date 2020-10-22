import React from 'react';

const GiftItem = ({title, url, id}) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GiftItem
