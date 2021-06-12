import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({total, showTransactionForm, onClickNew }) => {


    return (
        <header className='header'>
            <h1>{total}</h1>
            <Button
                color={showTransactionForm ? '#A93226' : '#2980B9'}
                text={showTransactionForm ? 'Cancelar' : ' Nueva'}
                onClick={ onClickNew } 
            />
        </header>
    )
}