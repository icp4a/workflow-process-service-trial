import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';


import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p> Workflow Process Service is a new capability with a small footprint and resource usage for authoring and running workflows, which is offered only as part of IBM Cloud Pak® for Business Automation.
  </p>
);

const BannerText = () => <h1>Installing Workflow Process Service Trial</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="white"
      color="black"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (<div></div>),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;