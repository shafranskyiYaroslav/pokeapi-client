import React from 'react';
import { connect } from 'react-redux';
import { selectCard, filterByType } from '../../store/actions/actions'
import { getPokemonPrimaryStat, getPokemonImage, getPokemponTypes } from '../utils/utils';
import Item from '../Item/Item';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class PokeCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pokedex: {},
        }
    }

    getPokemonObject = async () => {
        this.props && this.props.id &&
        await P.getPokemonByName(this.props.id)
            .then(res => this.setState({ pokedex: res })
            )
            .catch(() => {})
    }

    componentDidMount() {
        this.getPokemonObject()
    }

    render() {
        const { pokedex } = this.state;
        const { selectCard, id, filterByType, selectedType } = this.props;
        const itemProps = {
            pokedex,
            name: getPokemonPrimaryStat(pokedex, 'name'),
            image: getPokemonImage(pokedex),
            types: getPokemponTypes(pokedex),
            onClick: selectCard,
            filterByType,
            id,
            selectedType,
        }
        const isHidden = (selectedType !== '' || selectedType !== itemProps.selectedType) ? {display: 'none'} : {};

        return (
            <>
                {
                    this.props &&
                    (selectedType === '' || ( itemProps && itemProps.types && itemProps.types.includes(selectedType))) &&
                    <Item {...itemProps} style={isHidden}/>
                }
            </>
        )
    }
    
}

const mapStateToProps = ({ selectedCardId, selectedType }) => ({ selectedCardId, selectedType })

export default connect(mapStateToProps, { selectCard, filterByType })(PokeCard)
