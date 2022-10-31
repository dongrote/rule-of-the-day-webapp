import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import dayjs from 'dayjs';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const mobileDateFormatString = 'MMM D, YYYY';
const tabletDateFormatString = 'dddd, MMM D, YYYY';
const verboseDateFormatString = 'dddd, MMMM D, YYYY';

const DateHeader = props => <Header as='h3' content={props.content} />;

const DateDisplay = props => (
  <Grid centered columns={3}>
    {props.onPreviousClick && (
      <Grid.Column onClick={() => props.onPreviousClick()} textAlign='left' verticalAlign='middle' width={2}>
        <PrevButton />
      </Grid.Column>
    )}
    <Grid.Column verticalAlign='middle' width={6}>
      <Grid textAlign='center'>
        <Grid.Row only='mobile'>
          <DateHeader content={dayjs(props.date).format(mobileDateFormatString)} />
        </Grid.Row>
        <Grid.Row only='tablet'>
          <DateHeader content={dayjs(props.date).format(tabletDateFormatString)} />      
        </Grid.Row>
        <Grid.Row only='computer'>
          <DateHeader content={dayjs(props.date).format(verboseDateFormatString)} />      
        </Grid.Row>
      </Grid>
    </Grid.Column>
    {props.onNextClick && (
      <Grid.Column onClick={() => props.onNextClick()} textAlign='left' verticalAlign='middle' width={2}>
        <NextButton />
      </Grid.Column>
    )}
  </Grid>
);

export default DateDisplay;
