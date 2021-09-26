import './App.css';
import React from "react";
import { App as IICSApp, NewButton } from '@informatica/iics-components';


//If you are using archipelago theme. Can replace with crystal or statement(CFCN) theme
import "@informatica/droplets-core/dist/themes/statement/statement.css";
import {pages} from './pages';
import { Shell } from '@informatica/droplets-common';

function App() {
    return (
        <Shell productName="IICS App Store" routes={[...pages]} layout="vertical" data-testid="appShell">
            <Shell.Header productName="IICS App Store">
            </Shell.Header>
            <Shell.Nav >
                {fixedWorkspaces => (
                    <>
                        {fixedWorkspaces}
                    </>
                )}
            </Shell.Nav>
            <Shell.Main />
        </Shell>
    );
}

export const HomePage = () => {
    
  return (
          <div>
              Home Page.
          </div>
  )
}


export const home = {
  path: '/home',
  component: HomePage,
  meta: {
      nav: {
          label: 'Home'
      }
  }
};


export default App;
