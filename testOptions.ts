import { test as base } from '@playwright/test'

export type TestOptions = {
    globalsQaUrls: string
}

export const test = base.extend<TestOptions>({
    globalsQaUrls: ['', {option: true}],
});