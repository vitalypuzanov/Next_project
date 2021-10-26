import {Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout(props) {
  return (
    <div>
      <Fragment>
        <Header></Header>
        <main>{props.children}</main>
        <Footer></Footer>
      </Fragment>
    </div>
  );
}

export default Layout;
