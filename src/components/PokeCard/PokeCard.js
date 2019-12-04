import React from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../../store/actions/actions'
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
        const { selectCard, id } = this.props;
        const itemProps = {
            pokedex,
            name: getPokemonPrimaryStat(pokedex, 'name'),
            image: getPokemonImage(pokedex),
            types: getPokemponTypes(pokedex),
            onClick: selectCard,
            id,
        }
        return (
            <>
                {
                    this.props &&
                    <Item {...itemProps} />
                }
            </>
        )
    }
    
}

const mapStateToProps = ({ selectedCardId }) => ({ selectedCardId })

export default connect(mapStateToProps, { selectCard })(PokeCard)
