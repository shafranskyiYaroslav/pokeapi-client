import React from 'react';
import { Table } from 'reactstrap';
import './SelectedItem.css';

const SelectedItem = ({ 
    id,
    name,
    image,
    types,
    attack,
    defense,
    health,
    SPAttack,
    SPDefence,
    speed,
    weight,
    moves }) => {

    return (
        <div className='container-fluid item-container selected-item-container'>
            <img src={image} alt={name} />
            <h5>{name} #00{id}</h5>
            <div className='table-responsive fixed-table-body'>
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <span>Type</span>
                            </td>
                            <td>
                                { types && (
                                    <span>
                                        <span>{types[0]}</span>
                                        {
                                            types[1] && (
                                                <span>, {types[1]}</span>
                                            )
                                        }
                                    </span>
                                    )
                                }
                            </td>    
                        </tr>
                        <tr>
                            <td>
                                <span>Attack</span>
                            </td>
                            <td>
                                {attack}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Defence</span>
                            </td>
                            <td>
                                {defense}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>HP</span>
                            </td>
                            <td>
                                {health}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>SP Attack</span>
                            </td>
                            <td>
                                {SPAttack}
                            </td>
                        </tr>
                        <tr>
                            <td className='xs-6'>
                                <span>SP Defence</span>
                            </td>
                            <td>
                                {SPDefence}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Speed</span>
                            </td>
                            <td>
                                {speed}
                            </td>
                        </tr>
                        <tr>
                            <td xs-6>
                                <span>Weight</span>
                            </td>
                            <td xs-2>
                                {weight}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Total moves</span>
                            </td>
                            <td>
                                {moves}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SelectedItem
