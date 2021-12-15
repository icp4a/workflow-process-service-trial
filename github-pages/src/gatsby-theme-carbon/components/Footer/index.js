import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Last updated: {buildTime}
      <br />
      © Copyright IBM Corporation
    </p>
    
  </>
);

const links = {
    firstCol: [
        { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
        { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },

    ],
    secondCol: [
        { href: 'https://www.ibm.com/', linkText: 'IBM.com' }
    ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;