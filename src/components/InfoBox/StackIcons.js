import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import ReactIcon from "!svg-react-loader!../../images/svg-icons/react.svg?name=ReactIcon";
import AWSIcon from "!svg-react-loader!../../images/svg-icons/aws.svg?name=AWSIcon";
import NodejsIcon from "!svg-react-loader!../../images/svg-icons/nodejs.svg?name=NodejsIcon";
import GraphqlIcon from "!svg-react-loader!../../images/svg-icons/graphql.svg?name=GraphqlIcon";
import MaterialUiIcon from "!svg-react-loader!../../images/svg-icons/material-ui.svg?name=MaterialUiIcon";
import ReduxIcon from "!svg-react-loader!../../images/svg-icons/redux.svg?name=ReduxIcon";
import GatsbyIcon from "!svg-react-loader!../../images/svg-icons/gatsby.svg?name=GatsbyIcon";
import IllustratorIcon from "!svg-react-loader!../../images/svg-icons/illustrator.svg?name=IllustratorIcon";
import WebpackIcon from "!svg-react-loader!../../images/svg-icons/webpack.svg?name=WebpackIcon";
import BabelIcon from "!svg-react-loader!../../images/svg-icons/babel.svg?name=BabelIcon";
import HerokuIcon from "!svg-react-loader!../../images/svg-icons/heroku.svg?name=HerokuIcon";
import HTML5Icon from "!svg-react-loader!../../images/svg-icons/html5.svg?name=HTML5Icon";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = [
    { name: "AWS", url: "https://aws.org/", comp: AWSIcon },
    { name: "Nodejs", url: "https://nodejs.org/", comp: NodejsIcon },
    { name: "react", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    { name: "material-ui", url: "https://material-ui-next.com/", comp: MaterialUiIcon },
    { name: "redux", url: "https://redux.js.org/", comp: ReduxIcon },
    { name: "illustrator", url: "https://adobe.com/", comp: IllustratorIcon },
    { name: "webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    { name: "babel", url: "https://babeljs.io/", comp: BabelIcon },
    { name: "heroku", url: "https://heroku.com/", comp: HerokuIcon },
    { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "html5", url: "https://html5.org/", comp: HTML5Icon }
  ];

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>technologies:</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
