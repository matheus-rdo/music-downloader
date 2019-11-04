const ytdl = require('ytdl-core');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath);

const getInfo = async url => {
    return ytdl.getInfo(url, { filter: 'audioonly' })
}

const download = async (info, response) => {
    return ffmpeg()
        .input(ytdl.downloadFromInfo(info, { filter: 'audioonly' }))
        .toFormat('mp3')
        .pipe(response)
}

module.exports = {
    getInfo,
    download
}