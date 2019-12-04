import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PokeCardsList from '../PokeCardsList/PokeCardsList';
import { changeFirstId } from '../../store/actions/actions';
import './Viewer.css';

const Viewer = ({ firstId, lastId, changeFirstId, selectedCardId }) => {
    const pokedexProps = { firstId, lastId, selectedCardId };
    return (
        <div className='container-fluid'>
            <h1>POKEDEX</h1>
            <PokeCardsList {...pokedexProps} />
            <Button
                onClick={() => changeFirstId()}
                color='primary'
                size='lg'>Load More</Button>
        </div>
    )
}

const mapStateToProps = ({ firstId, lastId, selectedCardId }) => ({ firstId, lastId, selectedCardId });

export default connect(mapStateToProps, { changeFirstId })(Viewer);
