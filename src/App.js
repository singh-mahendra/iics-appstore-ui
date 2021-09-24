import logo from './logo.svg';
import './App.css';
import React from "react";
import { App as IICSApp, NewButton } from '@informatica/iics-components';


//If you are using archipelago theme. Can replace with crystal or statement(CFCN) theme
import "@informatica/droplets-core/dist/themes/statement/statement.css";
import {pages} from './pages';

function App() {
    return (
      <div>
        <IICSApp
          walkthrough={true}
          layout="vertical"
          productName="IICS App Store"
          configUrl="/iics_metadata"
          routes={[...pages]}
          basePath="/"
          extensibility
          analytics={{ enabled: true }}
          navContainer={
            <NewButton
                variant="grouped"
                helpId="CUSTOM_NEW_DIALOG_HELP_ID"
            />
          }
          lazyInit
        />
		</div>
    );
}


export default App;
