import { Bio } from 'Pages';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route exact path={['/', '/bio']} component={Bio} />
    </Switch>
  );
};
