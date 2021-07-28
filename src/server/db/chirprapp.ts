import { Query } from './index';

const all = async () => Query('SELECT * FROM chirprapp');


export default {
  all
}