import React, { Component } from "react";

import style from "./index.scss";
import MainRouter from "@/router/main";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    const { menuList } = this.state;

    return (
      <section className={style.main}>
        <MainRouter />
      </section>
    );
  }
}

export default Main;
