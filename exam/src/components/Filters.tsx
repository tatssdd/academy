import { Select, DatePicker, Button, Input, ConfigProvider, Flex } from 'antd';
import { categories } from '../utils/categories';
import locale from 'antd/locale/ru_Ru';
import styled from '@emotion/styled';

const StyledFilters = styled(Flex)`
  justify-content: space-around;
  height: 33px;
`;

interface FiltersProps {
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
  dateFilter: string | null;
  setDateFilter: (date: string | null) => void;
  favoriteFilter: boolean;
  setFavoriteFilter: (fav: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Filters = ({
  categoryFilter,
  setCategoryFilter,
  setDateFilter,
  favoriteFilter,
  setFavoriteFilter,
  searchTerm,
  setSearchTerm,
}: FiltersProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <StyledFilters>
        <Select
          allowClear
          placeholder='Тип мероприятия'
          style={{ width: 180 }}
          options={categories}
          value={categoryFilter}
          onChange={(category) => setCategoryFilter(category)}
        >
          <Select.Option value='sample'>Sample</Select.Option>
        </Select>
        <ConfigProvider locale={locale}>
          <DatePicker
            format='DD.MM.YYYY'
            onChange={(date) => setDateFilter(date ? date.toISOString() : null)}
          />
        </ConfigProvider>
        <Button
          style={{ width: '150px' }}
          onClick={() => setFavoriteFilter(!favoriteFilter)}
        >
          {favoriteFilter ? 'Все' : 'Только избранные'}
        </Button>
      </StyledFilters>
      <Input
        allowClear
        placeholder='Поиск по названию'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
