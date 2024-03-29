/**
 * @prettier
 */
//require("dotenv").config();
import web3 from "./web3";
import CampaignFactory from "./build/ElectionFactory.json";

const address = process.env.REACT_APP_Contract;
console.log(address)
const instance = new web3.eth.Contract(CampaignFactory, address);

export default instance;
