import 'normalize.css';
import { MainContainer } from './components/common/MainContainer.styled';
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendsList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import userInfo from './data/user.json';
import statData from './data/data.json';
import friendsList from './data/friends.json';
import transactionsData from './data/transactions.json';
import { Button } from './components/common/button';

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
