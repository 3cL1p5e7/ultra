require('./vendor.js');

import {load} from 'src/parsers/stats-parser.js';
import {parse} from 'src/parsers/stats.graph.parser.js';
window.sigma.load_stats = load;
window.sigma.parse_stats = parse;