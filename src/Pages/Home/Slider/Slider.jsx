import { Carousel } from 'react-carousel-minimal';
import img1 from '../../assets/images/slider1.jpg';
import img2 from '../../assets/images/slider2.jpg';
import img3 from '../../assets/images/slider3.jpg';
import img4 from '../../assets/images/slider4.jpg';

const Slider = () => {
  const data = [
    {
      image: img1,
      caption: 'Thriving in web development.',
    },
    {
      image: img2,
      caption: 'Designing with graphics.',
    },
    {
      image: img3,
      caption: 'Careers in tech and design.',
    },
    {
      image: img4,
      caption: 'Navigating digital marketing.',
    },
  ];

  const captionStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
  };
  return (
    <div className="App overflow-hidden ">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 auto',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="full"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              minWidth: 'full',
              maxHeight: '500px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
