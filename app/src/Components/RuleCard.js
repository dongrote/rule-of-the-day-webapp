import React from 'react';
import { Card, Grid, Label, Message, Placeholder, Segment } from 'semantic-ui-react';
import DateDisplay from './DateDisplay';

const RuleCard = props => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <DateDisplay
            date={props.date}
            onPreviousClick={props.onPreviousDate}
            onNextClick={props.onAdvanceDate}
          />
        </Card.Header>
        <Card.Description>
          <Segment color='black'>
          {(!props.loading && !props.error) && (
            <Grid padded>
              <Grid.Column width={14}>
                {props.ruleText}
              </Grid.Column>
              <Grid.Column textAlign='right' width={2}>
                <Label circular color='grey'>{props.ruleNumber}</Label>
              </Grid.Column>
            </Grid>
          )}
          {(!props.loading && props.error) && (
            <Message negative>
              <Message.Header>{props.error.name}</Message.Header>
              <p>{props.error.message}</p>
            </Message>
          )}
          {(!props.error && props.loading) && (
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          )}
          </Segment>
        </Card.Description>
      </Card.Content>
      {props.description &&
        <Card.Content extra>
          {props.description}
        </Card.Content>
      }
    </Card>
  );
};

export default RuleCard;
