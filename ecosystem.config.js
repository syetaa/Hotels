module.exports = {
    apps: [
        {
            name: 'hotels_front',
            script: 'yarn install && yarn build && yarn start -p 3040',
            time: true,
            log_date_format: 'DD.MM.YYYY HH:mm:ss',
        },
    ],
};
