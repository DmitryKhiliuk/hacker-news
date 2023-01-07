import React from 'react';
import {Button, Header, Menu, Segment} from "semantic-ui-react";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {selectActiveItem} from "../../app/selectors";
import {changeActiveItemAC} from "../../app/App-reducer";

export const HeadEr = () => {

    const dispatch = useAppDispatch()
    const activeItem = useAppSelector(selectActiveItem)

    const getNewHandler = () => {
        dispatch(changeActiveItemAC({activeItem: 'new'}))
    }
    const getTopHandler = () => {
        dispatch(changeActiveItemAC({activeItem: 'top'}))
    }
    const getBestHandler = () => {
        dispatch(changeActiveItemAC({activeItem: 'best'}))
    }

    const onClickHandler = () => {

    }

    return (
        <>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Header as={'h3'} inverted color={'grey'} floated={'left'}
                            style={{margin: 0, paddingTop: 5}}>HackerNews </Header>
                    <Menu.Item style={{marginLeft: 20}}
                               name='new'
                               active={activeItem === 'new'}
                               onClick={getNewHandler}
                    />
                    <Menu.Item
                        name='top'
                        active={activeItem === 'top'}
                        onClick={getTopHandler}
                    />
                    <Menu.Item
                        name='best'
                        active={activeItem === 'best'}
                        onClick={getBestHandler}
                    />
                    <Menu.Menu position={'right'}>
                        <Button onClick={onClickHandler}>refresh </Button>
                    </Menu.Menu>
                </Menu>
            </Segment>
        </>
    );
};

