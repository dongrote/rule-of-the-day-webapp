import React from 'react';
import { Grid, Header, Icon, Menu } from 'semantic-ui-react';
import dayjs from 'dayjs';

const mobileDateFormatString = 'dd, MMM D, YYYY';
const tabletDateFormatString = 'ddd, MMM D, YYYY';
const verboseDateFormatString = 'dddd, MMMM D, YYYY';

const DateDisplay = props => (
  <Menu compact fitted borderless>
    {props.onPreviousClick && (
      <Menu.Item onClick={() => props.onPreviousClick()}>
        <Icon name='arrow left'/>
      </Menu.Item>
    )}
    <Menu.Item>
      <Grid>
        <Grid.Row only='mobile'>
          <Header content={dayjs(props.date).format(mobileDateFormatString)} />
        </Grid.Row>
        <Grid.Row only='tablet'>
          <Header content={dayjs(props.date).format(tabletDateFormatString)} />      
        </Grid.Row>
        <Grid.Row only='computer'>
          <Header content={dayjs(props.date).format(verboseDateFormatString)} />      
        </Grid.Row>
      </Grid>
    </Menu.Item>
    {props.onNextClick && (
      <Menu.Item onClick={() => props.onNextClick()}>
        <Icon name='arrow right' />
      </Menu.Item>
    )}
  </Menu>
);

export default DateDisplay;
