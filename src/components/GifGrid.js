import React from 'react'
import PropTypes from 'prop-types'
import GiftItem from './GiftItem';
import useFetchGifts from '../hooks/useFetchGifts';

const GifGrid = ({name}) => {

    const {loading, data: images} = useFetchGifts(name);

    return (
        <>
            <h3>{name}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {images?.map(item => (
                    <GiftItem key={item.id} {...item} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    name: PropTypes.string.isRequired
}

export default GifGrid

