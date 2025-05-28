import { Carousel, Image } from 'antd';
import homeHeader from '../assets/homeHeader.png';
import styled from '@emotion/styled';
import { HomeEventCard } from '../components/HomeEventCard';
import { categories } from '../utils/categories';

const MainText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  text-align: center;
  padding: 20px;
  font-size: 1.3rem;
`;

const MainHomeImg = styled(Image)`
  border-radius: 8px;
  width: 98.5vw !important;
  height: 300px !important;
  opacity: 0.7;
`;

const StyledCarousel = styled.div`
  height: 48vh;
  width: 87%;
  background-color: rgba(189, 228, 252, 0.8);
  padding-left: 12rem;
  border-radius: 8px;
  opacity: 0.7;
`;

export const Home = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
      >
        <MainHomeImg src={homeHeader} preview={false} />
        <MainText>
          <h2>
            <i>
              <q>
                Nulla vulputate dolor mi, vitae maximus felis imperdiet et.
                Donec sed sem at mauris pulvinar vehicula eu eu tellus.
              </q>
            </i>
          </h2>
          <p>
            Nam luctus nunc nec tortor auctor, quis lacinia tortor consequat.
            Nam sagittis suscipit neque ac placerat. Nam velit libero, lacinia
            at libero ut, tristique fringilla mi. Nam id varius lectus, sit amet
            scelerisque nulla. Ut scelerisque non leo eu vehicula.Phasellus ac
            lacus dictum, convallis ipsum nec, semper nisl. Mauris lacinia magna
            nibh. Sed auctor mollis dolor et viverra.
          </p>
        </MainText>
      </div>
      <StyledCarousel>
        <Carousel
          dotPosition={'bottom'}
          infinite={true}
          slidesToShow={4}
          autoplay={true}
          style={{
            width: '93%',
            alignItems: 'center',
            height: '48vh',
            paddingTop: '2rem',
          }}
        >
          {categories.map((category) => (
            <HomeEventCard
              key={category.id}
              title={category.label}
              description={category.description}
            />
          ))}
        </Carousel>
      </StyledCarousel>
    </>
  );
};
