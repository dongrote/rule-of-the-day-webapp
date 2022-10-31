import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import RuleCardChooser from './Components/RuleCardChooser';
import GitHubLink from './Components/GitHubLink';
import Hyperlink from './Components/Hyperlink';

const footerText = [
  {text: 'Rule of the Day', href: '/'},
  {text: 'Contact', href: '/'},
  {text: 'About', href: '/'},
];

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
          {footerText.map((item, i) => (
            <Grid.Column key={i}>
              <p style={{fontSize: '0.75em'}}>
                <Hyperlink content={item.text} href={item.href} />
              </p>
            </Grid.Column>
          ))}
          <Grid.Column>
            <GitHubLink />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Container>
);

export default App;
