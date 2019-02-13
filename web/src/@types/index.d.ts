declare module "redux-api-middleware";

interface StoreState {
  hello: HelloState;
}

interface HelloState {
  compiler: string;
  framework: string;
}

interface BaseAction {
  type: string;
  payload?: string | object;
}

interface ConnectProps {
  dispatch: (arg: BaseAction) => void;
}

interface RouterProps {
  history: {
    push: (path: string) => void;
  };
}
