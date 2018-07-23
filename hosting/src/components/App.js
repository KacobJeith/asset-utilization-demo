import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../redux/actions'
import AsyncComponent from './AsyncComponent'

import AppBar from './AppBar'
import Footer from './Footer'
// import Landing from './landing/Landing'
import About from './about/About'
import Build from './heep/Build'
import Logout from './account/Logout'
import Loading from './Loading'
import UserAccount from './account/UserAccount'
import ProductDetails from './store/ProductDetails'
import DownloadPage from './heep/DownloadPage'
import ManageCart from './store/ManageCart'
import Tutorials from './Tutorials'
import Contact from './Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

const Landing = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "landing" */
  	/* webpackMode: "lazy" */
  	'./pages/LandingIIOT')} />

const Store = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "store" */
  	/* webpackMode: "lazy" */
  	'./store/Store')} />

const Checkout = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "checkout" */
  	/* webpackMode: "lazy" */
  	'./store/Checkout')} />

const Auth = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "auth" */
  	/* webpackMode: "lazy" */
  	'./account/Auth')} />

const Technology = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "iiot" */
  	/* webpackMode: "lazy" */
  	'./pages/iiot')} />

const diy = () => <AsyncComponent moduleProvider={() => import(
	/* webpackChunkName: "diy" */
  	/* webpackMode: "lazy" */
  	'./pages/diy')} />


import Theme from './Theme'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const mapStateToProps = (state) => ({
	loginStatus: state.loginStatus,
})

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.props.updateScrollPosition(window.scrollY)
    }

  topSpacer() {
    const inputs = {
      style: {
        height: 60,
        width: '100%',
      }
    }

    return (
      <div id="top" {...inputs}/>
    )
  }

	render() {
		

		const inputs = {
			container : {
				style: {
					height: "100vh",
					width: "100%",
					marginTop: 0,
					display: "flex",
					flexDirection: 'column'
				}

			},
			content: {
				style: {
					flex: '1 0 auto',
					maxWidth:'100%'
				}
			}
	    }

	    return(
			<Router >
			    	<MuiThemeProvider theme={Theme}>
							<div {...inputs.container}>
								<div {...inputs.content}>
                  {this.topSpacer()}
									<Route path="/" component={AppBar}/>
									<Route exact path="/" component={Landing}/>
									<Route path="/Landing" component={Landing}/>
									<Route path="/Makers" component={diy}/>
									<Route path="/About" component={About}/>
									<Route path="/Technology" component={Technology}/>
{/* 									<Route path="/Business" component={CommercialApplications}/> */}
									<Route path="/privacypolicy" component={PrivacyPolicy}/>
									<Route path="/tos" component={TermsOfService}/>
                  					<Route path="/Contact" component={Contact}/>
{/* 									<Route path="/Tutorials" component={Tutorials}/> */}
{/* 									<Route path="/product/:productID" component={ProductDetails}/> */}
{/* 									<Route path="/Checkout" component={Checkout}/> */}
{/* 									<Route path="/MyCart" component={ManageCart}/> */}
{/* 									<Route path="/Shop" component={Store}/> */}
{/* 									<Route exact path="/auth" component={Auth}/> */}
									<Route exact path="/Developers" component={DownloadPage}/>
{/* 									{this.props.loginStatus && <Route path="/User" component={UserAccount} key="user"/>} */}
								</div>
								<Route path="/" component={Footer}/>
						    </div>
				    </MuiThemeProvider>
			</Router>);

	}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
