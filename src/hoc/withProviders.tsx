import React from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import { messages } from "../App/App.const";
import { DarkModeContextProvider } from "../contexts/DarkModeContext/DarkModeContext";

interface HocComponentProps {
  language: string;
  [x: string]: any;
}

const withProviders = (WrappedComponent: React.ComponentType<any>) => {
  const hocComponent = ({ language, ...props }: HocComponentProps) => (
    <Router>
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale={"en"}
      >
        <DarkModeContextProvider>
          <WrappedComponent {...props} />
        </DarkModeContextProvider>
      </IntlProvider>
    </Router>
  );

  return hocComponent;
};

export default withProviders;
