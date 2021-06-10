import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({total, showAdd }) => {


    return (
        <header className='header'>
            <h1>{total}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Cerrar' : 'Nueva Transaccion'}
            />
        </header>
    )
}

Header.defaultProps = {
    total: '$4500',
}

Header.propTypes = {
    total: PropTypes.string.isRequired,
}