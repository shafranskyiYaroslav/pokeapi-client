import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { selectCard } from '../../store/actions/actions';
import { connect } from 'react-redux';
import PokeCard from '../PokeCard/PokeCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const PokeCardsList = (props) => {

    const { selectedCardId, firstId, lastId } = props;

    const makeIdsArray = () => {
        let resultArray = [];
        for(let i = firstId; i <= lastId; i++) {
            resultArray.push(i)
        }
        return resultArray.map(el => el.toString());
    }

    const isMobile = window.innerWidth < window.innerHeight;

    return (
        <>
        <Container fluid>
            {
                isMobile &&
                selectedCardId > 0 && (
                    <Row>
                        <SelectedCard id={ selectedCardId } />
                    </Row>
                )
            }
            <Row>
                <Col lg={ selectedCardId > 0 ? 6 : 12 } xs={12} >
                    <Row>
                        {
                            makeIdsArray().map((id) => (
                                <Col key={ id } xs={12} lg={4}>
                                    <PokeCard id={id} />
                                </Col>
                            )
                        )}
                    </Row>
                    </Col>
                <Col xs={6}>
                    {
                        !isMobile &&
                        selectedCardId > 0 && (
                            <Col lg={10}>
                                <SelectedCard id={ selectedCardId } />
                            </Col>
                        )
                    }
                </Col>
            </Row>
        </Container>
        </>
    )
}


const mapStateToProps = ({ selectedCardId, firstId, lastId }) => ({ selectedCardId, firstId, lastId })

export default connect(mapStateToProps, { selectCard })(PokeCardsList)
