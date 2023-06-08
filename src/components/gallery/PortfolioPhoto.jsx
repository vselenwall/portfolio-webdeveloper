import React from 'react';

// styles
import '../../sass/style.scss'

const Gallery = () => {

    const galleryData = [
        '/media/gallery/interior-1.jpg',
        '/media/gallery/interior-2.jpg',
        '/media/gallery/interior-3.jpg',
      
        '/media/gallery/furniture-4.jpeg',
        '/media/gallery/furniture-5.jpeg',
        '/media/gallery/furniture-2.jpeg',
      
        '/media/gallery/other-1jpg.jpg',
        '/media/gallery/other-5.jpeg',
        '/media/gallery/other-4.jpeg'
      ];
      

    return (
        <div className="gallery__container">
            <div className="gallery__customers">
                {/* <h4>I've been working with</h4> */}
                <div>
                    <p>Stefanssons Fastighetsbyrå</p>
                    <p>Roslinds Optik</p>
                    <p>PTN Heritage</p>
                    <p>Ånimmens Fiskevårdsförening</p>
                    <p>Springyard Paul Brunngård</p>
                </div>
            </div>
            <div className="gallery__img">
            {galleryData.map((image, index) => (
                <img className="gallery__item" key={index} src={process.env.PUBLIC_URL + image} alt={`Image ${index}`} />
            ))}
            </div>
        </div>
    )
}

export default Gallery