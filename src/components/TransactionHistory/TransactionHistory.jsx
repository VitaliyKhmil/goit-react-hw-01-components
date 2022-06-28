import PropTypes from 'prop-types';
import { TransactionHistoryContainer, TableData, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ history }) => {
    return <TransactionHistoryContainer>
    <thead>
        <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
        </tr>
    </thead>
    <tbody>
        {history.map(({id, type, amount, currency}) =>
        <tr key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </tr>)}
    </tbody>
</TransactionHistoryContainer>
}

TransactionHistory.propTypes = {
    history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired
}