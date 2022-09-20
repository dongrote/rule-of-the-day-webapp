import React from 'react';
import { Card, Grid, Label } from 'semantic-ui-react';

const RuleCard = props => (
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

export default RuleCard;
