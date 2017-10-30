module.exports = {
    verbose: true,
    // roots: ["<rootDir>/static_src/tests/"],
    transform: {
        ".*\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        ".*\\.(css|less|scss|sass)$": "<rootDir>/static/css/__mocks__/styleMock.js",
        ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/static/css/__mocks__/fileMock.js"
    }
};