import { DetailedCard } from '../../components/DetailedCard';
import { LayoutRoot } from '../../components/Layout';

export const MainPage = () => {
  return (
    <LayoutRoot>
      <DetailedCard
        userName={'VitMach'}
        avatarUrl={''}
        imageUrl={
          'https://kartinki.pics/uploads/posts/2022-12/thumbs/1670458439_5-kartinkin-net-p-daiving-kartinki-pinterest-5.jpg'
        }
        likes={10}
        isLikedByYou={true}
        userId={1}
        comments={[
          { nickname: 'VitMach', text: 'первый' },
          {
            nickname: 'Vitalii',
            text: 'второй',
          },
          {
            nickname: 'Vitalii',
            text: 'третий',
          },
          {
            nickname: 'Vitalii',
            text: 'четвёртый',
          },
        ]}
      />
    </LayoutRoot>
  );
};
