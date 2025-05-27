import { Typography, Flex, Button, Image } from 'antd';
import type { LocationDetailsProps } from '../types/types';
import styled from '@emotion/styled';
import { categories } from '../utils/categories';
import { useEventStore } from '../store/useEventsStore';

const LocationInfoCard = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const AddressInfoCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(252, 249, 189, 0.8);
`;

const EmptyAddressMessage = styled(Typography.Title)`
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 25rem !important;
  height: 300px !important;
  object-fit: contain;
  object-position: center;
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1.3rem;
  width: 15rem;
  margin-bottom: 1.3rem;
  background-color: rgba(205, 241, 121, 0.8);
`;

export function LocationDetails({ address, event }: LocationDetailsProps) {
  const { toggleFavorite } = useEventStore();
  const handleFavoriteClick = () => {
    if (event) {
      toggleFavorite(event.id);
    }
  };
  const isFavorite = useEventStore((state) => {
    const e = state.events.find((ev) => ev.id === event?.id);
    return e?.isFavorite;
  });
  return (
    <LocationInfoCard>
      {address ? (
        <AddressInfoCard>
          <Typography.Title
            style={{ fontSize: 'large' }}
          >{`${event?.title ?? 'Выберите событие или точку на карте'}`}</Typography.Title>
          <Typography.Text>{`Адрес: ${address.route}`}</Typography.Text>
          {event && (
            <>
              <Typography.Text>{`Дата начала: ${new Date(event.startAt).toLocaleString()}`}</Typography.Text>
              <Typography.Text>{`Дата окончания: ${new Date(event.endAt).toLocaleString()}`}</Typography.Text>
              <Typography.Text>
                {`Тип мероприятия: ${
                  categories.find((c) => c.value === event.category)?.label ||
                  event.category
                }`}
              </Typography.Text>
              <StyledImage src={event.img} preview={false}></StyledImage>
              <StyledButton onClick={handleFavoriteClick}>
                {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
              </StyledButton>
            </>
          )}
        </AddressInfoCard>
      ) : (
        <EmptyAddressMessage>Выберите точку на карте</EmptyAddressMessage>
      )}
    </LocationInfoCard>
  );
}
