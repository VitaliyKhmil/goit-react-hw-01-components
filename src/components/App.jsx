import 'normalize.css';
import { MainContainer } from './common/MainContainer.styled';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userInfo from '../userdata/user.json';
import statData from '../userdata/data.json';
import friendsList from '../userdata/friends.json';
import transactionsData from '../userdata/transactions.json';
import { Button } from './button';

export const App = () => {
  return (
    <MainContainer>
      <Button>
        <a href="https://saveukraine.exmo.com/">
          Save Ukraine!!!
        </a>
      </Button>
      <Profile user={userInfo} />
      <Statistics data={statData} />
      <FriendsList friends={friendsList} />
      <TransactionHistory history={transactionsData} />
    </MainContainer>
  );
};
