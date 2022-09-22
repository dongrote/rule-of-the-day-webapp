import React from 'react';
import { Card, Grid, Label, Message, Placeholder } from 'semantic-ui-react';

const RuleCard = props => {
  if (props.loading) {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Placeholder>
              <Placeholder.Line />
            </Placeholder>
          </Card.Header>
          <Card.Description>
            <Placeholder>
              <Placeholder.Line />
            </Placeholder>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </Card.Content>
      </Card>
    );
  }

  if (props.error) {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Message negative>
              <Message.Header>{props.error.name}</Message.Header>
              <p>{props.error.message}</p>
            </Message>
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Grid columns={2}>
            <Grid.Column textAlign='left'>
              {props.date}
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Label circular color='grey'>{props.ruleNumber}</Label>
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Card.Description>
          {props.ruleText}
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
