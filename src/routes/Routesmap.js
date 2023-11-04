import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';


import PrivacyPolicy from '../components/Documents/PrivacyPolicy';
import TermsnConditions from '../components/Documents/TermsnConditions';
import ReturnPolicy from '../components/Documents/ReturnsPolicy';
import ShippingandDelivery from '../components/Documents/ShippingandDelivery';
import Disclaimer from '../components/Documents/Disclaimer';

import Error404 from '../components/Tools/Error404';

import Home from './HOME';



import Modeling from "./Services/Modeling/Modeling";
import ModelingBasicService from './Services/Modeling/ModelingBasicService'
import ModelingEliteService from './Services/Modeling/ModelingEliteService' 
import ModelingExpert from './Services/Modeling/ModelingExpert'

import FinishingSchool from "./Services/FinishingSchool/FinishingSchool";
import FinishingBasicService from './Services/FinishingSchool/FinishingBasicService'
import FinishingEliteService from './Services/FinishingSchool/FinishingEliteService' 
import FinishingExpert from './Services/FinishingSchool/FinishingExpert'

import Blogs from './BLOGS';

import Reviews from './Reviews';


import Aboutus from './Aboutus';
import Contactus from './CONTACTUS';


import Login from './admin/Loginform.js'
import Dashboard from './admin/Dashboard/Dashboard.js'

export {
/*Fixed */

Navbar,Footer,
PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,
Error404,Home,

Blogs,Reviews,Aboutus,Contactus,
ReturnPolicy,

/*Services */
Modeling,ModelingBasicService,ModelingEliteService,ModelingExpert,
FinishingSchool,FinishingBasicService,FinishingEliteService,FinishingExpert,

Login,Dashboard,

};