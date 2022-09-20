import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import RuleCardChooser from './Components/RuleCardChooser';
import GitHubLink from './Components/GitHubLink';

const App = () => (
  <Container text>
    <div style={{position: "relative", top: "2em"}}>
      <Header textAlign='center'>
        Rule of the Day
        <Header.Subheader>
          Dr. Jordan Peterson's Rules For Life
        </Header.Subheader>
      </Header>
      <RuleCardChooser />
      <Grid columns={3} style={{position: 'relative', top: '2em'}}>
        <Grid.Column/>
        <Grid.Column>
          <p align='center' style={{'font-size': '0.875em'}}>
            Rule of the Day | Contact | About
          </p>
        </Grid.Column>
        <Grid.Column textAlign='right'>
            <GitHubLink/>
        </Grid.Column>
      </Grid>
    </div>
  </Container>
);

export default App;
