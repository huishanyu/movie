
var mysql = require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'huishanyu',
    database: 'eternal'
})

module.exports = {
    getMovieData: function (req, res) {
        conn.query('SELECT * FROM movie ORDER BY RAND() LIMIT 0,9', function (err, data) {
            if (err) return err;
            res.send(data)
        });
    },
    getMovieDataOne: function (req, res) {
        var id = req.query.id;
        var sql = 'SELECT * FROM movie WHERE id=?';
        var pamar = [id];
        conn.query(sql, pamar, function (err, data) {
            if (err) return err;
            res.send(data)
        });
    },
    insertDataOne: function (req, res) {
        var MovieImg = req.body.MovieImg;
        var MovieName = req.body.MovieName;
        var MovieInfo = req.body.MovieInfo;
        var MovieNumBar = req.body.MovieNumBar;
        var movie_direct = '托尼·基格里奥';
        var movie_write = 'Jonas Barnes / Keith Domingue';
        var movie_actor = '山姆·贾格 / 阿德琳妮·帕里奇 / 迈克尔·加·怀特 / 帕斯卡尔·休顿 / 泰·奥尔森 / 莫妮卡·甘德顿 / 凯拉·扎戈尔斯基 / 郑启蕙 / 马修·马斯登 / 麦克·多普德 / 玛尔奇 T. 豪斯 / 扎夫·帕鲁 ';
        var movie_type = '动作';
        var movie_region = '美国';
        var movie_language = '英语';
        var movie_time = '2017-08-01';
        var movie_length = '89';
        var movie_alias = '反恐特警組：十萬火急（台）';
        var movie_distinguishability = '超清';
        var movie_download_b = 'https://pan.baidu.com/s/1jImlJQu';
        var movie_download_b_pwd = '3wav';
        var movie_download_c = 'magnet:?xt=urn:btih:D32A893C5C0FC209D9AA5D51CB50E1A9BE61CF5B';
        var movie_download_d = '';
        var sql = `INSERT INTO movie VALUE(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
        var pamar = [MovieName, MovieImg, movie_direct, movie_write, movie_actor, movie_type, movie_region, movie_language, movie_time,
            movie_length, movie_alias, MovieNumBar, movie_distinguishability, MovieInfo, movie_download_b, movie_download_b_pwd,
            movie_download_c, movie_download_d];
        console.log(pamar)
        conn.query(sql, pamar, function (err, data) {
            if (err) {
                res.send('0');
            } else {
                res.send('1');
            }
        })
    },
    delDataOne: function (req, res) {
        var movieid = req.query.MovieId;
        var sql = 'DELETE FROM movie WHERE id=?';
        var pamar = [movieid];
        conn.query(sql, pamar, function (err, data) {
            if (err) {
                res.send('0');
            } else {
                res.send('1');
            }
        })
    },
    updateDataOne: function (req, res) {
        var MovieImg = req.body.MovieImg;
        var MovieName = req.body.MovieName;
        var MovieInfo = req.body.MovieInfo;
        var MovieNumBar = req.body.MovieNumBar;
        var movieid = req.body.MovieId;
        var sql = `UPDATE movie SET movie_title=?,movie_img=?,movie_grade=?,movie_info=? WHERE id=?`;
        var pamar = [MovieName, MovieImg, MovieNumBar, MovieInfo, movieid];
        console.log(pamar)
        conn.query(sql,pamar,function (err, data) {
            if(err){
                res.send('0');
            }else{
                res.send('1');
            }
        })
    }
};


