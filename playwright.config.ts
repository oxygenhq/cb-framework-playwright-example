import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        browserName: 'chromium',
        // Test against Chrome Stable channel.
        channel: 'chrome',
        headless: false,
        //trace: 'on-first-retry',
        //screenshot: 'only-on-failure',
        //video: 'on-first-retry'
    },
    retries: 1,
    workers: 1,
    reporter: [
        //['list'],
        ['./cb-reporter/CloudBeatReporter.ts'],
        ['json', {  outputFile: 'test-results.json' }]
    ]
};

export default config;