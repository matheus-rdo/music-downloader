const express = require('express');
const router = express.Router();
const AppError = require('../../utils/appError')
const youtubeService = require('./services/youtubeService')


router.get('/', async function (req, res, next) {
    const { url } = req.query
    if (!url) throw new AppError('Informe a URL')

    const videoInfo = await youtubeService.getInfo(url);
    res.header('Content-Disposition', `attachment; filename="${videoInfo.title}.mp3"`);
    youtubeService.download(videoInfo, res);
})

router.get('/all', async function (req, res, next) {
    res.send('Baixando TODOS')
})

module.exports = router;