/**
 * Created by yarik_000 on 07.03.2016.
 */
var express = require('express'),
    app = express();

app.use(express.static('/home/ubuntu' + '/public'));

app.listen(8888);