import React from 'react';
import { getPokemonPrimaryStat, getPokemonImage, getPokemponTypes, getPokemonStat, getPokemonMoves } from '../utils/utils';
import SelectedItem from '../SelectedItem/SelectedItem';
import { connect } from 'react-redux';
import { unselectCard } from '../../store/actions/actions';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

class SelectedCard extends React.Component {
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

    componentDidUpdate() {
        this.getPokemonObject()
    }

    render() {
        const { pokedex } = this.state;
        const { id, unselectCard } = this.props;
        const selectedItemProps = {
            pokedex,
            name: getPokemonPrimaryStat(pokedex, 'name'),
            image: getPokemonImage(pokedex),
            types: getPokemponTypes(pokedex),
            attack: getPokemonStat(pokedex, 'attack'),
            defense: getPokemonStat(pokedex, 'defence'),
            health: getPokemonStat(pokedex, 'hp'),
            SPAttack: getPokemonStat(pokedex, 'special-attack'),
            SPDefence: getPokemonStat(pokedex, 'special-defense'),
            speed: getPokemonStat(pokedex, 'speed'),
            weight: getPokemonPrimaryStat(pokedex, 'weight'),
            moves: getPokemonMoves(pokedex),
            onClick: unselectCard,
            id,
        }
        return (
            <>
                {
                    this.props &&
                    <SelectedItem {...selectedItemProps} />
                }
            </>
        )
    }
    
}

const mapStateToProps = ({ selectedCardId }) => ({ selectedCardId })

export default connect(mapStateToProps, { unselectCard })(SelectedCard)
