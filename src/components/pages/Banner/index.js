import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';
import image1 from './image/1.jpg';
import image2 from './image/2.png';
import image3 from './image/3.png'
import image4 from './image/4.png'
import image5 from './image/5.png'
import image6 from "./image/cc.png"
import image7 from "./image/car.png"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 480, // Adjust this height as needed
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180 // Adjust this height as needed
    }
}));

const Banner = () => {
    const images = [image1,image2,image3,image4,image5,image6,image7]; 

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            style={{ minHeight: 600 }} // Adjust this minHeight as needed
        >
            {images.map((image, index) => (
                <Image src={image} alt={`banner-${index}`} key={index} />
            ))}
        </Carousel>
    );
};

export default Banner;
