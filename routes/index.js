var express = require('express');
var router = express.Router();
var userRouter = require('../src/js/sql')

/* 查询全部 */
router.get('/getMovieData',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    userRouter.getMovieData(req, res);
})
/* 查询一条数据 */
router.get('/getMovieDataOne',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    userRouter.getMovieDataOne(req, res);
})
/* 新增一条数据 */
router.post('/insertDataOne',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    userRouter.insertDataOne(req, res);
})
/* 删除一条数据 */
router.get('/delDataOne',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    userRouter.delDataOne(req, res);
})
/* 修改一条数据 */
router.post('/updateDataOne',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    userRouter.updateDataOne(req, res);
})
module.exports = router;

