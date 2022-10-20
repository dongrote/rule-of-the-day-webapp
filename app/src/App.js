import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import RuleCardChooser from './Components/RuleCardChooser';
import GitHubLink from './Components/GitHubLink';

const footerText = ['Rule of the Day', 'Contact', 'About'];

const App = () => (
  <Container text>
    <div style={{position: "relative", top: "2em"}}>
      <Header textAlign='center'>
        Rule of the Day
        <Header.Subheader>
          Dr. Jordan B. Peterson's Rules For Life
        </Header.Subheader>
      </Header>
      <RuleCardChooser />
      <Grid columns={footerText.length + 1} textAlign='center' style={{position: 'relative', top: '2em'}}>
        <Grid.Row>
          {footerText.map((text, i) => (
            <Grid.Column key={i}>
              <p style={{fontSize: '0.75em'}}>
                {text}
              </p>
            </Grid.Column>
          ))}
          <Grid.Column>
            <GitHubLink/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Container>
);

export default App;
