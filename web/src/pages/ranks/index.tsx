import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getRanks, setLoading } from "@/actions";
import Container from "@/components/Container";
import Header from "@/components/Header";

import RankItems from "./RankItems";

interface PageProps extends ReduxRouterProps, RankState {}
class Page extends React.PureComponent<PageProps, {}> {
  public async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setLoading(true));
    await dispatch(getRanks());
    dispatch(setLoading(false));
  }

  public render() {
    const { data } = this.props;
    return (
      <Container>
        <Header filter="ranks" />
        <RankItems data={data} />
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  ...state.rank,
});
export default withRouter(connect(mapStateToProps)(Page) as any);
