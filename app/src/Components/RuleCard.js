import React from 'react';
import { Card, Grid, Label, Message, Placeholder } from 'semantic-ui-react';
import DateDisplay from './DateDisplay';

const RuleCard = props => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Grid columns={2}>
            <Grid.Column textAlign='left'>
              <DateDisplay
                date={props.date}
                onPreviousClick={props.onPreviousDate}
                onNextClick={props.onAdvanceDate}
              />
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Label circular color='grey'>{props.ruleNumber}</Label>
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Card.Description>
          {(!props.loading && !props.error) && props.ruleText}
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
